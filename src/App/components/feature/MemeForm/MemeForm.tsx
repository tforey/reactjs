import { MemeInterface, ImageInterface } from "orsys-tjs-meme";
import React, { useEffect, useState } from "react";
import Button from "../../ui/Button/Button";
import style from "./MemeForm.module.css";

//types
interface IMemeFormProps {
  onMemeValueChange: Function;
  meme: MemeInterface;
  images: Array<ImageInterface>;
}

const MemeForm: React.FC<IMemeFormProps> = (props) => {
  return (
    <div data-testid="MemeForm" className={style.MemeForm}>
      <form>
        <h1>Titre</h1>
        <input
          type="text"
          id="f_titre"
          placeholder="saisir titre"
          value={props.meme.titre}
          onChange={(evt) => {
            props.onMemeValueChange({ ...props.meme, titre: evt.target.value });
          }}
        />
        <hr />
        <h2>Image</h2>
        <select
          onChange={(evt) => {
            props.onMemeValueChange({
              ...props.meme,
              imageId: Number(evt.target.value),
            });
          }}
        >
          <option value="-1" selected>
            Aucune
          </option>
          {props.images.map((value, i) => (
            <option key={"fimg" + i} value={value.id}>
              {value.name}
            </option>
          ))}
        </select>
        <hr />
        <h2>text</h2>
        <input
          type="text"
          value={props.meme.text}
          onChange={(evt) => {
            props.onMemeValueChange({ ...props.meme, text: evt.target.value });
          }}
        />
        <div className={style.half}>
          <div>
            <label htmlFor="f_x">x:</label>
            <br />
            <input
              type="number"
              className={style.smallInput}
              value={props.meme.x}
              onChange={(evt) => {
                props.onMemeValueChange({
                  ...props.meme,
                  x: Number(evt.target.valueAsNumber),
                });
              }}
            />
          </div>
          <div>
            <label htmlFor="f_y">y:</label>
            <br />
            <input
              type="number"
              className={style.smallInput}
              value={props.meme.y}
              onChange={(evt) => {
                props.onMemeValueChange({
                  ...props.meme,
                  y: evt.target.valueAsNumber,
                });
              }}
            />
          </div>
        </div>
        <hr />
        <label htmlFor="f_color">Couleur</label>
        <br />
        <input
          type="color"
          id="f_color"
          value={props.meme.color}
          onChange={(evt) => {
            props.onMemeValueChange({ ...props.meme, color: evt.target.value });
          }}
        />
        <div className={style.half}>
          <div>
            <label htmlFor="f_sz">font-size:</label>
            <br />
            <input
              type="number"
              className={style.smallInput}
              min={0}
              value={props.meme.fontSize}
              onChange={(evt) => {
                props.onMemeValueChange({
                  ...props.meme,
                  fontSize: evt.target.valueAsNumber,
                });
              }}
            />
          </div>
          <div>
            <label htmlFor="f_fw">font-weight:</label>
            <br />
            <input
              type="number"
              className={style.smallInput}
              min="100"
              step="100"
              max="900"
              value={props.meme.fontWeight}
              onChange={(evt) => {
                //https://www.w3.org/TR/2011/WD-html5-20110525/the-input-element.html#input-type-attr-summary
                props.onMemeValueChange({
                  ...props.meme,
                  fontWeight: evt.target.valueAsNumber,
                });
              }}
            />
          </div>
        </div>
        <div className={style.half}>
          <div>
            <label htmlFor="f_underline">underline:</label>
            <br />
            <input
              id="f_underline"
              type="checkbox"
              checked={props.meme.underline}
              onChange={(evt) => {
                props.onMemeValueChange({
                  ...props.meme,
                  underline: evt.target.checked,
                });
              }}
            />
          </div>
          <div>
            <label htmlFor="f_italic">italic:</label>
            <br />
            <input
              id="f_italic"
              type="checkbox"
              checked={props.meme.italic}
              onChange={(evt) => {
                props.onMemeValueChange({
                  ...props.meme,
                  italic: evt.target.checked,
                });
              }}
            />
          </div>
        </div>
        <hr />
        <div className={style.half}>
          <Button type="reset" backgroundColor="tomato">
            Reset
          </Button>
          <Button type="submit">save</Button>
        </div>
      </form>
    </div>
  );
};

export default MemeForm;
