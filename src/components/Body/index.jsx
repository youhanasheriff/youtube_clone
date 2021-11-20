import { videos } from "../../files/videos";
import classes from "./Body.module.css";
import VideoTile from "./Videotile";

const Body = () => {
	return (
		<div className={classes.body}>
			{videos.map((det) => {
				return (
					<VideoTile
						key={det.title}
						img={det.videoImage}
						title={det.title}
						views={det.views}
						uploaded={det.uploaded}
						channelName={det.channelName}
						channelImage={det.channelImage}
						onClick={() => alert(det.title)}
					/>
				);
			})}
		</div>
	);
};

export default Body;
