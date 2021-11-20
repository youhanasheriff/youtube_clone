import classes from "./VideoTile.module.css";

const VideoTile = ({
	img,
	title,
	views,
	uploaded,
	channelName,
	channelImage,
	onClick,
}) => {
	return (
		<div className={classes.container} onClick={onClick}>
			<div className={classes.img_container}>
				<input type="image" className={classes.img} src={img} alt="Video" />
				<div className={classes.img_cover}></div>
			</div>
			<div className={classes.video_desc}>
				<input
					type="image"
					src={channelImage}
					alt="Channel Image"
					className={classes.channel_img}
				/>
				<div>
					<p className={classes.title}>{title}</p>
					<p className={classes.channel_name}>{channelName}</p>
					<div className={classes.sub_para}>
						<p className={classes.sub_para1}>{views} Views</p>
						{"•"}
						<p className={classes.sub_para2}>{uploaded}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VideoTile;
