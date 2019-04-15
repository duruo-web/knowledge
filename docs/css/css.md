### 超过宽度，显示...，需指定宽度

    overflow {
    	overflow: hidden;
    	text-overflow: ellipsis;
    	white-space: no-wrap;
    	display: block;
    	width: 100%;
    }
### 超过宽度，两行之后，显示...，需指定宽度

    overflow2 {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      white-space: initial;
    }
