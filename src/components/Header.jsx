import React from 'react';
import { Link as RouterLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <RouterLink to="/about">About</RouterLink>
    </header>
  )
}
