import Image from 'next/image'
import styles from './page.module.css'
import Link from "next/link";
import { SignIn } from "@/components/sign-in";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <Box>
        <SignIn />
    </Box>
  )
}
