import { Height } from '@material-ui/icons';
import Head from 'next/head';
import Navbar from './Navbar';
import Link from 'next/link';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


const Layout = ({ children }) => (
    <div className="main-container">
        <Head>
            <title>Note App</title>
        </Head>
        <Navbar />
        {children}
        <Link href="/new">
          <Fab color="primary" aria-label="add" className="add-btn">
            <AddIcon style={{color:'#33322A !important'}}/>
          </Fab>
        </Link>
    </div>
)

export default Layout;