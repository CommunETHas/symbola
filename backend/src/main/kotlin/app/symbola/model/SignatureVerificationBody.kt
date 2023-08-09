package app.symbola.model

import kotlinx.serialization.Serializable

@Serializable
data class SignatureVerificationBody(
    val message: String,
    val signature: String
)
