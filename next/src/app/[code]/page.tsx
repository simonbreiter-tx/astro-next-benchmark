import styles from './CodePage.module.css';

export default async function CodePage({
  params,
}: {
  params: Promise<{ code: string }>
}) {
  const { code } = await params;
  const response = await fetch(`https://codes.simonbreiter.com/${code}`);
  const jsonResponse = await response.json();
 
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{jsonResponse.code}</h1>
      <p className={styles.description}>{jsonResponse.description}</p>
    </div>
  );
}