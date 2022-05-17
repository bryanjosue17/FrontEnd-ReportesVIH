import { useCallback, useState } from "react";
import { addValidationRule } from "formsy-react";
import useDebounce from "./useDebounce";
import _ from "../utils/lodash";
addValidationRule("select", (values, value) => {
  // value = parseInt(value);
  if (value === -1 || value === "" || value === "-1" || !value || value === "Sin seleccion" || value === "Sin selección") {
    return false;
  }
  return true;
});

function useForm(initialState, onSubmit) {
  const [form, setForm] = useState(initialState);
  const regex = {
    /**alfanumerico permisivo guion y espacio */
    alfanumericosGuion: /^([a-zA-ZÀ-ÿ0-9-\s]*)$/,
    alfanumericosGuionApostrofe: /^([a-zA-ZÀ-ÿ0-9-'-\s]*)$/,
    alfanumericosMultiline: /^([a-zA-ZÀ-ÿ0-9-'-,.\s]*)$/,
  }
  const validacionesBase = {
    /**valida que la fecha sea menor que la actual y sea una fecha valida */
    fechaValidaMenorActual: {
      fechaValidaMenorActual: true
    },
    /** validacion de seleccion existente y diferente de -1 */
    select: {
      select: true
    },
    /** validacion de valor númerico */
    isNumeric: {
      isNumeric: true
    },
    /** validacion para pasar una expresion regular para validar el valor uso: matchRegex(regex) */
    matchRegexp: (regex) => {
      return {
        matchRegexp: regex
      }
    }
  }
  /** constantes personalizadas */
  const validations = {
    textField: {
      validations: {
        matchRegexp: /^([a-zA-ZÀ-ÿ-'\s]*)$/,
      },
      validationErrors: {
        matchRegexp: "Entrada no válida",
        isDefaultRequiredValue: "Campo requerido",
      },
    },
    textField_alfa_guion: {
      //alfanumericos permite el guion y espacioi
      validations: {
        matchRegexp: regex.alfanumericosGuion,
      },
      validationErrors: {
        matchRegexp: "Entrada no válida",
        isDefaultRequiredValue: "Campo requerido",
      },
    },
    numberField: {
      validations: {
        isNumeric: true,
      },
      validationErrors: {
        isNumeric: "Solo se aceptan dígitos",
        isDefaultRequiredValue: "Campo requerido",
      },
    },
    required: {
      validationErrors: {
        isDefaultRequiredValue: "Campo requerido",
      },
    },
    integerField: {
      validations: {
        matchRegexp: /^\d+$/,
      },
      validationErrors: {
        matchRegexp: "Solo se acepta numeros enteros",
        isDefaultRequiredValue: "Campo requerido",
      },
    },
    accountField: {
      validations: {
        matchRegexp: /^\d+(\.\d{1,2})?$/,
      },
      validationErrors: {
        matchRegexp: "Solo se acepta cantidad con dos decimales",
        isDefaultRequiredValue: "Campo requerido",
      },
    },
    textField_alfa_min_max_length: {
      validations: {
        isNumeric: true,
        minLength: 13,
      },
      validationErrors: {
        isNumeric: "Entrada no válida",
        minLength: "Debe contener 13 caracteres",
        isDefaultRequiredValue: "Campo requerido",
      },
      inputProps: { maxLength: 13 },
      disabled: false,
    },
    customTextField_alfa_min_max_length: (min, max, msg) => customTextField_alfa_min_max_length(min, max, msg),
    maxLength: (maxLength) => ({
      validations: {
        maxLength: maxLength,
      },
      validationErrors: {
        maxLength: `Alcanzó el límite de caracteres permitidos (${maxLength})`,
        isDefaultRequiredValue: "Campo requerido",
      },
      inputProps: { maxLength: maxLength/*  + 1 */ },
    }),
    validarFecha: { validations: { validarFecha: true } },
    SelectField: {
      validaMsjError: (campoValue, CampoRequerido) => {
        return {
          mensajeError: campoValue === -1 && CampoRequerido ? "Campo requerido" : "",
        };
      }
    },
    textField_multilinea: {
      //alfanumericos permite caracteres especiales
      validations: {
        matchRegexp: regex.alfanumericosMultiline,
      },
      validationErrors: {
        matchRegexp: "Entrada no válida",
        isDefaultRequiredValue: "Campo requerido",
      },
    },
  };

  /**
   *
   * @param {*} min: minimo de caracteres
   * @param {*} max: maximo de caracteres
   * @param {*} msg: mensaje cuando no se cumple el minimo de caracteres
   *
   * Personaliza la validacion de un minimo y maximo de digitos y muestra un mensaje
   *
   * Uso:
   * propsObj:{
   *    ...,
   *    ...customTextField_alfa_min_max_length(
   *        6,
   *        20,
   *        "Debe contener un mínimo de 8 digitos"
   *    ),
   *    ...
   * }
   */
  const customTextField_alfa_min_max_length = (min, max, msg) => {
    const _validations = {
      ...validations.textField_alfa_min_max_length,
    };
    _validations.validations = {
      ..._validations.validations,
      minLength: min,
    };
    _validations.inputProps = {
      ..._validations.inputProps,
      maxLength: max,
    };
    _validations.validationErrors = {
      ..._validations.validationErrors,
      minLength: msg,
    };
    return _validations;
  };

  const handleChange = useCallback((event) => {
    // console.log("event: ", event);
    // event.persist();
    setForm((form) =>
      _.setIn(
        { ...form },
        event.target.name,
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value
      )
    );
  }, []);

  const resetForm = useCallback(() => {
    if (!_.isEqual(initialState, form)) {
      setForm(initialState);
    }
  }, [form, initialState]);

  const setInForm = useCallback((name, value) => {
    setForm((form) => _.setIn(form, name, value));
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      if (event) {
        event.preventDefault();
      }
      if (onSubmit) {
        onSubmit();
      }
    },
    [onSubmit]
  );

  /**Hooks personalizados */
  const onInvalid = useCallback(() => {
    if (!form || !form.form_valid) return;
    setForm((form) => _.setIn({ ...form }, "form_valid", false));
  }, [form]);

  const onValid = useCallback(() => {
    if (!form || form.form_valid) return;
    setForm((form) => _.setIn({ ...form }, "form_valid", true));
  }, [form]);

  /* Eliminamos el lag en campos texto */
  const setData = useDebounce((event) => {
    setForm((form) =>
      _.setIn(
        { ...form },
        event.target.name,
        event.target.type === "checkbox" ? event.target.checked : event.target.value
      )
    );
  }, 400);

  const handleChangeDebounce = useCallback(
    (event) => {
      setData(event);
    },
    [setData]
  );

  return {
    form,
    validations,
    handleChange,
    handleSubmit,
    resetForm,
    setForm,
    setInForm,
    onInvalid,
    onValid,
    customTextField_alfa_min_max_length,
    regex,
    validacionesBase,
    handleChangeDebounce
  };
}

export default useForm;