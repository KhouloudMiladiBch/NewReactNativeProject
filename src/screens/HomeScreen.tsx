import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, Text, FlatList, ListRenderItem, ViewToken, TouchableWithoutFeedback } from 'react-native';
import Video, { OnLoadData } from 'react-native-video';
import { black, white, windowHeight } from '../utils';
import homeStyles from '../styles/Home';
import Icon from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';

interface Video {
  [x: string]: any;
  id: string;
  title: string;
  description:string;
  thumbnailUrl : string;
  videoUrl : string;
  duration: number;
}

const videosData: Video[] = [
    {
            "id": "1",
            "title": "Big Buck Bunny",
            "description":"#Big #Buck #Bunny #Description",
            "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
            "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            "duration":0
        },
        {
            "id": "2",
            "title": "The first Blender Open Movie from 2006",
            "description":"#First #Blender #Movie #Description",
            "thumbnailUrl": "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp",
            "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
            "duration":0
        },
        {
            "id": "3",
            "title": "For Bigger Blazes",
            "description":"#Bigger #Blazes #Video #Description",
            "thumbnailUrl": "https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg",
            "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
            "duration":0
        },
        {
            "id": "4",
            "title": "For Bigger Escape",
            "description":"#Bigger #Escape #Description",
            "thumbnailUrl": "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
            "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
            "duration":0
        },
        {
            "id": "5",
            "title": "Big Buck Bunny",
            "description":"#Big #Buck #Bunny #Description",
            "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
            "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            "duration":0
        },
        {
            "id": "6",
            "title": "For Bigger Blazes",
            "description":"#Bigger #Blazes #Description",
            "thumbnailUrl": "https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg",
            "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
            "duration":0
        },
        {
            "id": "7",
            "title": "For Bigger Escape",
            "description":"#Description",
            "thumbnailUrl": "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
            "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
            "duration":0
        },
        {
            "id": "8",
            "title": "The first Blender Open Movie from 2006",
            "description":"#First #Blender #Open #Movie #2006 #Description",
            "thumbnailUrl": "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp",
            "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
            "duration":0
        }    
];


const HomeScreen: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [videos, setVideos] = useState<Video[]>(videosData);
  const currentIndex = useRef<number>(0);
  const videoRefs = useRef<React.RefObject<Video>[]>([]);
  const [viewableItems, setViewableItems] = useState(new Map<string, boolean>());
  const [pausedItems, setPausedItems] = useState(new Map<string, boolean>());

  useEffect(() => {
    setViewableItems(new Map().set(videosData[0].id, true));
  }, []);

  const onViewableItemsChanged = useCallback(({ viewableItems, changed }:any) => {
    setViewableItems((prev) => {
      const newViewableItems = new Map(prev);
      changed.forEach((item : any) => {
        if (item.isViewable) {
          newViewableItems.set(item.key, true);
        } else {
          newViewableItems.delete(item.key);
        }
      });
      return newViewableItems;
    });
  }, []);

  const handleLoad = (data: OnLoadData) => {
    const updatedVideos = [...videos];
    updatedVideos[currentIndex.current].duration = data.duration;
    setVideos(updatedVideos);
    setDuration(data.duration);
  };

  const handleSlidingComplete = (value: number) => {
    const currentVideoRef = videoRefs.current[currentIndex.current];
    if (currentVideoRef?.current) {
      currentVideoRef.current.seek(value);
      setCurrentTime(value);
    }
  };


  const handleVideoPress = (id: string) => {
    setPausedItems((prev) => {
      const newPausedItems = new Map(prev);
      if (newPausedItems.has(id)) {
        newPausedItems.set(id, !newPausedItems.get(id));
      } else {
        newPausedItems.set(id, true);
      }
      return newPausedItems;
    });
  };

  const renderItem : ListRenderItem<Video> = ({ item }) => {
    const isViewable = viewableItems.get(item.id);
    const isPaused = pausedItems.get(item.id) || false;

    return (
      <TouchableWithoutFeedback onPress={() => handleVideoPress(item.id)}>
        <View style={homeStyles.videoContainer}>
        {isViewable && (
          <Video
            source={{ uri: item.videoUrl }}
            style={homeStyles.video}
            resizeMode="cover"
            repeat
            controls={false}
            onLoad={handleLoad}
            playWhenInactive={false}
            paused={!isViewable || isPaused}
          />)}
          {isPaused && (
        <View style={homeStyles.playIconContainer}>
            <Icon name="play-circle" style={homeStyles.playIcon} />
        </View>
          )}
         
        <View style={homeStyles.titleContainer}>
          <Text style={homeStyles.titleText}>{item.title}</Text>
          <Text style={homeStyles.descriptionText}>{item.description}</Text>
        </View>
        {isPaused && (
        <View style={homeStyles.timeBarContainer}>
          <Slider
            style={homeStyles.slider}
            minimumValue={0}
            maximumValue={duration}
            value={currentTime}
            onSlidingComplete={handleSlidingComplete}
            minimumTrackTintColor={white}
            maximumTrackTintColor={black}
            thumbTintColor={white}
          />
        </View>)}
        </View>
      </TouchableWithoutFeedback>
    )};
    return (
      <View style={homeStyles.container}>
        <FlatList
          data={videos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          pagingEnabled
          showsVerticalScrollIndicator={false}
          decelerationRate="fast"
          snapToInterval={windowHeight}
          snapToAlignment="start"
          getItemLayout={(data, index) => (
            { length: windowHeight, offset:windowHeight * index, index }
          )} 
          onViewableItemsChanged={onViewableItemsChanged}
          />   
      </View>
    );
  };

      
export default HomeScreen;
