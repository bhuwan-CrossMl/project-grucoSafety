"use client"; // Ensure this is present
export const BASE_URL = "";

export const ALPHANUMERIC_REGEX = /^[a-zA-Z0-9]+(?: [a-zA-Z0-9]+)*$/;

export const PHONE_NUMBER_REGEX = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

export const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const ALPHANUMERIC_REGEX_2 = /^([a-zA-Z0-9+&!#\/?%?-]+(?: [a-zA-Z0-9+&!#\/?%?-]+)*)?$/;

export const LETTER_NUMBER_AND_SPACE_REGEX = /^[a-zA-Z0-9][a-zA-Z0-9 ]*$/;

export const LETTER_NUMBER_AND_SPACE_REGEX_MULTILINE = /^[a-zA-Z0-9][a-zA-Z0-9 \n]*$/;

export const NUMERIC_REGEX = /^\d*$/;
