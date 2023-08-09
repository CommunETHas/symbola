package app.symbola.plugins

import app.symbola.model.SignatureVerificationBody
import app.symbola.model.SiweMessage
import app.symbola.model.SiweVerifyResponse
import io.ktor.server.application.*
import io.ktor.server.auth.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.server.sessions.*
import java.util.UUID

fun Application.configureRouting() {
    routing {
        get("/") {
            call.respondText("Hello World!")
        }

        get("/nonce") {
            call.application.log.debug("Receiving nonce request")
            val nonce = UUID.randomUUID().toString()
            call.sessions.set("nonce", nonce)
            call.respondText(nonce)
        }

        post("/verify") {
            val signature = call.receive<SignatureVerificationBody>()
            call.application.log.debug("Receiving $signature")
            call.respond(SiweVerifyResponse(true))
        }

        authenticate("auth-session") {
            get("/admin") {
                val address = call.principal<SiweMessage>()?.address.toString()
                call.respondText("Hello, $address!")
            }
        }

        get("/logout") {
            call.sessions.clear("nonce")
            call.sessions.clear("auth-session")
            call.sessions.clear("user_session")
        }
    }

}
