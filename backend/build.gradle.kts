val ktor_version: String by project
val kotlin_version: String by project
val logback_version: String by project

plugins {
    kotlin("jvm") version "1.9.0"
    id("io.ktor.plugin") version "2.3.3"
}

group = "app.symbola"
version = "0.0.1"

application {
    mainClass.set("app.symbola.ApplicationKt")

    val isDevelopment: Boolean = project.ext.has("development")
    applicationDefaultJvmArgs = listOf("-Dio.ktor.development=$isDevelopment")
}

repositories {
    mavenCentral()
}

dependencies {
    implementation("io.ktor:ktor-server-core-jvm")
    implementation("io.ktor:ktor-server-netty-jvm")
    implementation("io.ktor:ktor-server-content-negotiation")
    implementation("io.ktor:ktor-serialization-kotlinx-json")
    implementation("io.ktor:ktor-server-auth")
//    implementation("io.ktor:ktor-server-auth-jwt")
    implementation("io.ktor:ktor-server-sessions")
//    implementation("io.ktor:ktor-server-auth")
    implementation("org.jetbrains.kotlinx:kotlinx-datetime:0.4.0")
    implementation("ch.qos.logback:logback-classic:$logback_version")
//    implementation("io.ktor:ktor-server-auth-jvm:2.3.3")
//    implementation("io.ktor:ktor-server-auth-jwt-jvm:2.3.3")
    implementation("org.web3j:crypto:4.10.2")
    implementation("io.ktor:ktor-server-call-logging-jvm:2.3.3")
    testImplementation("io.ktor:ktor-server-tests-jvm")
    testImplementation("org.jetbrains.kotlin:kotlin-test-junit:$kotlin_version")
}
