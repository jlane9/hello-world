import React from 'react';
import styled from 'styled-components';

export interface ImageCardProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt?: string;
  image?: string | null;
  className?: string;
  imageClassName?: string;
  title?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ className, imageClassName, alt, title, image, ...rest }) => {
  const defaultImage =
    'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80';

  return (
    <ImageCardWrapper {...rest} className={`relative rounded-xl text-white ${className ? className : ''}`}>
      <img alt={alt ? alt : title} className={`rounded-lg ${imageClassName}`} src={image || defaultImage} />
      {title && <span className="bottom-2 left-4 absolute">{title}</span>}
    </ImageCardWrapper>
  );
};

export const ImageCardWrapper = styled.div`
  cursor: pointer;
  img {
    background-size: cover;
    object-fit: cover;
    min-width: 100%;
  }
  span {
    line-height: 22px;
  }
`;

export default ImageCard;
