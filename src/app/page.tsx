"use client"

import TryoutDetail from "@/components/tryout/TryoutDetail";

export default function Home() {
  return (
    <main className="">
      <TryoutDetail />
    </main>
  );
}


const dummy = {
  "statusCode": 200,
  "message": "Success",
  "data": {
    "mode": "pro",
    "tryouts": [
      {
        "id": "7a691488-faf3-4645-82f5-326ece3a6139",
        "name": "Try Out Akbar 2",
        "start_date": "2024-03-30T17:58:26.000Z",
        "started_at": null,
        "submitted_at": null,
        "end_date": "2024-10-21T00:00:00.000Z",
        "current_set_id": null,
        "expiry_date": "2024-10-21T00:00:00.000Z",
        "event_name": "TO_AKBAR_2"
      },
      {
        "id": "d97fd716-14db-4992-a59c-4dd0bf6a6f7e",
        "name": "Try Out Akbar 1",
        "start_date": "2024-03-16T21:52:57.000Z",
        "started_at": null,
        "submitted_at": null,
        "end_date": "2024-03-21T00:00:00.000Z",
        "current_set_id": null,
        "expiry_date": "2024-03-21T00:00:00.000Z",
        "event_name": null
      }
    ]
  }
}