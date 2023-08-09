package app.symbola

import app.symbola.model.SiweMessage
import app.symbola.plugins.configureRouting
import io.ktor.server.application.*
import io.ktor.server.auth.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.server.plugins.callloging.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.sessions.*
import org.slf4j.event.*

fun main() {
    embeddedServer(Netty, port = 8080, host = "0.0.0.0", module = Application::module)
        .start(wait = true)
}

fun Application.module() {
    install(CallLogging) {
        level = Level.INFO
        filter { call -> call.request.path().startsWith("/") }
    }
    install(Authentication) {
        session<SiweMessage>("auth-session") {
            validate { session ->
                if (session.nonce.isNotEmpty()) {
                    session
                } else {
                    null
                }
            }
            challenge {
                call.respondRedirect("/login")
            }
        }
    }

    install(Sessions) {
        cookie<SiweMessage>("user_session") {
            cookie.path = "/"
            cookie.maxAgeInSeconds = 60
        }
    }


    configureRouting()
}
