import React from 'react'
import './SearchPage.css'
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import TuneIcon from '@mui/icons-material/Tune';
function SearchPage() {
  return (
    <div className='searchPage'>
<div className="searchPage__filter">
<TuneIcon/>
<h2>FILTER</h2>
</div>
<hr />

<ChannelRow
image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnY-HZ91bpcjkwXXWmuLi21jA9Z2qj6RUp0w&usqp=CAU"
channel="Clever Programmer"
verified
subs="1.3M"
noOfVideos={521}
description="You can find awsome programming lessons , crash course and tutorials here
!"
/>
<hr />
<VideoRow
views='2M'
subs='1.3M'
description='You can find awsome programming lessons , crash course and tutorials here
!'
channel="Clever Programmer"
timestamp='1 Week ago'
title='Lets Buld YouTube Clone with ReactJs'
image='https://i.ytimg.com/vi/XtMThy8QKqU/maxresdefault.jpg'
/>
<VideoRow
views='1.2M'
subs='1.3M'
description='You can find awsome programming lessons , crash course and tutorials here
!'
channel="Clever Programmer"
timestamp='1 Year ago'
title='Build App With React Native'
image='https://i.ytimg.com/vi/OojrxtudMKM/maxresdefault.jpg'
/>
<VideoRow
views='892k'
subs='1.3M'
description='You can find awsome programming lessons , crash course and tutorials here
!'
channel="Clever Programmer"
timestamp='5 days ago'
title='Learn Programming Langauge with me'
image='https://i.ytimg.com/vi/Lz3m4BI1EfY/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA7i2gACetKtHahyLPbfxLe_OSw-g'
/>
<VideoRow
views='1.9M'
subs='1.3M'
description='You can find awsome programming lessons , crash course and tutorials here
!'
channel="Clever Programmer"
timestamp='2 Weeks ago'
title='Learn Python in 2021'
image='https://i.ytimg.com/vi/XIrOM9oP3pA/maxresdefault.jpg'
/>
</div>

  )
}

export default SearchPage