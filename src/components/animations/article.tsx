import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const PageAnimation = ({ children }: Props) => (
    <motion.article
        initial={{ opacity: 0, x: 0, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, x: 0, y: 20 }}
        transition={{ ease: 'easeInOut', duration: 0.4 }}
        style={{ position: 'relative' }}
    >
        {children}
    </motion.article>
)

export default PageAnimation
