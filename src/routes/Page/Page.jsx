import styles from './Page.module.scss';

const Page = ({ children }) => <div className={styles.page}>{children}</div>;

const PageSidebar = ({ children }) => <div className={styles.sidebar}>{children}</div>;

const PageContent = ({ children }) => <div className={styles.content}>{children}</div>;

Page.Sidebar = PageSidebar;
Page.Content = PageContent;

export default Page;
