import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
    children: ReactNode
    delay: number
}

const Section = ({ children, delay = 0 }: Props) => {
    return (
        <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.3, delay }}
        >
            {children}
        </motion.div>
    )
}

export default Section
