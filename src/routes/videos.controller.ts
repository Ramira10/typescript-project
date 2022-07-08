
import { RequestHandler } from "express";
import Video from './Video'

export const getVideos: RequestHandler = async (req, res) => {
    try {
        const videos = await Video.find();
        res.status(200).send(videos)
    } catch(error) {
        console.log(error);
        res.status(400).send('Error');
    }
}

export const createVideo: RequestHandler = async (req, res) => {
    const { title, description, url } = req.body;
    try {
        const video = new Video({
            title,
            description,
            url
        });
        const savedVideo = await video.save();
        res.status(200).json(savedVideo);
    } catch (error) {
       console.log(error);
       res.status(400).send('Error');
    }
}

export const getVideo: RequestHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const video = await Video.findById(id);
        if(video) {
            res.status(200).send(video)
        } else {
            res.status(200).send("Video not found.")
        }
    } catch (error) {
        console.log(error);
        res.status(400).send('Error');
    }
}

export const deleteVideo: RequestHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const video = await Video.findByIdAndDelete(id);
        if(video) {
            res.status(200).send("Video eliminated.")
        } else {
            res.status(200).send("Video not found.")
        }
    } catch (error) {
        console.log(error);
        res.status(400).send('Error');
    }
}

export const updateVideo: RequestHandler = async (req, res) => {
    const { id } = req.params;
    const { title, description, url } = req.body;
    
    try {
        const videoUpdated = await Video.findByIdAndUpdate(id , {
            title,
            description,
            url
        }, {new: true})
        if(videoUpdated) {
            res.status(200).send("Video updated.")
        } else {
            res.status(200).send("Video not found.")
        }
    } catch (error) {
        console.log(error);
        res.status(400).send('Error');
    }
}