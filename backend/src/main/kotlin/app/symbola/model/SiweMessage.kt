package app.symbola.model

import io.ktor.server.auth.*
import kotlinx.serialization.Serializable

@Serializable
data class SiweMessage(
    val domain: String,
    val address: String,
    val uri: String,
    val version: String,
    val statement: String,
    val nonce: String,
    val chainID: Int,
    val issuedAt: String,
    val expirationTime: String,
    val notBefore: String,
    val requestID: String,
    val resources: List<String>
): Principal
