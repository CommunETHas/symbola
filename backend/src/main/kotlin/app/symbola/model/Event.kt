package app.symbola.model

import kotlinx.datetime.Instant
import kotlinx.serialization.Serializable
import kotlin.time.Duration

@Serializable
data class Event(
    val id: Int,
    val name: String,
    val start: Instant,
    val duration: Duration,
    val attendees: Int,
    val maxAttendees: Int,
    val price: String,
)
