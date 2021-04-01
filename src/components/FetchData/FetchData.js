import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"

export const FetchData = (fetchUrl) => {
  useEffect(() => {
    axios
      .get(fetchUrl)
      .then((res) => {
        const data = res.data
      })
      .catch((error) => {
        // handle your errors here
        console.error(error)
      })
  }, [fetchUrl])

  return
}
