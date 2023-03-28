import Link from 'next/link'
import React from 'react'

export default function index() {
  return (
    <main>
      <div style={{display:'flex',flexDirection:'column'}}>
        <Link href="jumping" >Jumping</Link>
        <Link href="background" >background</Link>
        <Link href="enfeites" >Enfeites</Link>
        <Link href="login" >Login</Link>
        <Link href="notas" >Notas</Link>
      </div>
    </main>
  )
}
