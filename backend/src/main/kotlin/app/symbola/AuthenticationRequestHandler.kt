package fr.hadaly.handler

import app.symbola.model.SiweMessage
import org.web3j.crypto.Keys
import org.web3j.crypto.Sign
import org.web3j.utils.Numeric

/**
 * Implementation based on :
 * [ECRecoverTest](github.com/PlatONnetwork/client-sdk-java/crypto/src/test/java/com/platon/crypto/ECRecoverTest.java)
 */

class AuthenticationRequestHandler(
    private val prefixMessage: String = "Welcome to Centurio, sign this message to authenticate ! "
    ) {

    fun verify(siweMessage: SiweMessage, signature: String): Boolean {
        val address = siweMessage.address
        val prefixMessage = "$prefixMessage${siweMessage.nonce}"

        val v = "0x" + signature.substring(130, 132)
        val r = signature.substring(0, 66)
        val s = "0x" + signature.substring(66, 130)

        val publicKey = Sign.signedPrefixedMessageToKey(prefixMessage.toByteArray(),
            Sign.SignatureData(
                Numeric.hexStringToByteArray(v),
                Numeric.hexStringToByteArray(r),
                Numeric.hexStringToByteArray(s)
            )
        ).toString(16)

        val recoveredAddress = "0x${Keys.getAddress(publicKey)}"
        return address.lowercase() == recoveredAddress
    }
}
