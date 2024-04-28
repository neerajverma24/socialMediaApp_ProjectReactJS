import './Share.css';
import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material';

export default function Share() {
    return (
        <div className='share'>
            <div className='share-wrapper'>
                <div className='share-top'>
                    <img src='/assets/person/1.jpeg' alt='' className='share-profileImg' />
                    <input placeholder="What's in your mind Neeraj ?" className='share-input' />
                </div>
                <hr className='share-hr' />

                <div className='share-bottom'>
                    <div className='share-options'>
                        <div className='share-option'>
                            <PermMedia htmlColor='tomato' className='share-icon' />
                            <span className='share-option-text'>Photo or Video</span>
                        </div>
                        <div className='share-option'>
                            <Label htmlColor='blue' className='share-icon' />
                            <span className='share-option-text'>Tag</span>
                        </div>
                        <div className='share-option'>
                            <Room htmlColor='green' className='share-icon' />
                            <span className='share-option-text'>Locations</span>
                        </div>
                        <div className='share-option'>
                            <EmojiEmotions htmlColor='gold' className='share-icon' />
                            <span className='share-option-text'>Feelings</span>
                        </div>
                    </div>
                    <button className='share-button'>Share</button>
                </div>
            </div>
        </div>
    )
}
