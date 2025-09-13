import styles from "./page.module.sass";
import Collection from "@/widgets/Collections/Collections";

export default function Home() {
	return (
		<div className={styles.page}>
			<Collection />
		</div>
	);
}
