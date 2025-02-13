import React from "react";
import PropTypes from "prop-types";
import { assign } from "lodash";
import * as Helpers from "../victory-util/helpers";
import * as CommonProps from "../victory-util/common-props";
import Rect from "./rect";
import Circle from "./circle";

const evaluateProps = (props) => {
  /**
   * Potential evaluated prop is:
   * `id`
   */
  const id = Helpers.evaluateProp(props.id, props);

  return assign({}, props, { id });
};

const Background = (props) => {
  props = evaluateProps(props);

  return props.polar
    ? React.cloneElement(props.circleComponent, {
        ...props.events,
        style: props.style,
        role: props.role,
        shapeRendering: props.shapeRendering,
        cx: props.x,
        cy: props.y,
        r: props.height,
        className: props.className
      })
    : React.cloneElement(props.rectComponent, {
        ...props.events,
        style: props.style,
        role: props.role,
        shapeRendering: props.shapeRendering,
        x: props.x,
        y: props.y,
        rx: props.rx,
        ry: props.ry,
        width: props.width,
        height: props.height,
        className: props.className
      });
};

Background.propTypes = {
  ...CommonProps.primitiveProps,
  circleComponent: PropTypes.element,
  height: PropTypes.number,
  rectComponent: PropTypes.element,
  rx: PropTypes.number,
  ry: PropTypes.number,
  width: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number
};

Background.defaultProps = {
  circleComponent: <Circle />,
  rectComponent: <Rect />,
  role: "presentation",
  shapeRendering: "auto"
};

export default Background;
