import colors from "../colors";

const components = {
  MuiStepIcon: {
    styleOverrides: {
      root: {
        height: 32,
        width: 32,
      },
      text: {
        fontSize: 16,
      },
    },
  },
  MuiTypography:{
    styleOverrides:{
      root:{
        margin:0
      }
    }
  },
  MuiButton: {
    styleOverrides: {
      root: {
        fontSize: "1.6rem",
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none",
        },
      },
      //start button type
      //contained
      containedPrimary: {
        backgroundColor: colors.sb60,
        "&:hover": {
          backgroundColor: colors.sb70,
        },
        "&:active": {
          backgroundColor: colors.sb80,
        },
        "&:disabled": {
          backgroundColor: colors.sb60,
          color: colors.p300,
          opacity: 0.5,
        },
      },
      containedSecondary: {
        backgroundColor: colors.ln50,
        color: colors.dn30,
        "&:hover": {
          backgroundColor: colors.mn10,
        },
        "&:active": {
          backgroundColor: colors.mn20,
        },
        "&:disabled": {
          backgroundColor: colors.ln40,
          color: colors.dn30,
          opacity: 0.5,
        },
      },
      containedSuccess: {
        backgroundColor: colors.sg70,
        color: colors.p300,
        "&:hover": {
          backgroundColor: colors.sg80,
        },
        "&:active": {
          backgroundColor: colors.sg90,
        },
        "&:disabled": {
          backgroundColor: colors.sg70,
          opacity: 0.5,
        },
      },
      containedWarning: {
        backgroundColor: colors.sy60,
        color: colors.p300,
        "&:hover": {
          backgroundColor: colors.sy70,
        },
        "&:active": {
          backgroundColor: colors.sy80,
        },
        "&:disabled": {
          backgroundColor: colors.sy60,
          opacity: 0.5,
        },
      },
      containedError: {
        backgroundColor: colors.sr70,
        color: colors.p300,
        "&:hover": {
          backgroundColor: colors.sr80,
        },
        "&:active": {
          backgroundColor: colors.sr90,
        },
        "&:disabled": {
          backgroundColor: colors.sr70,
          opacity: 0.5,
        },
      },
      //outline
      outlinedInfo: {
        borderColor: colors.ln50,
        color: colors.dn30,
        "&:hover": {
          backgroundColor: colors.ln40,
          borderColor: colors.ln50,
        },
        "&:active": {
          backgroundColor: colors.ln30,
          borderColor: colors.ln50,
        },
        "&:disabled": {
          backgroundColor: colors.p300,
          opacity: 0.5,
          color: colors.dn30,
        },
      },
      //end button type

      //Start button size
      sizeMedium: {
        padding: "8px 16px",
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        background: colors.ln10,
        fontSize: 16,
        lineHeight: "22px",
        "& fieldset": {
          borderColor: colors.ln30,
        },
        "&.Mui-focused": {
          "& .MuiOutlinedInput-notchedOutline": {
            borderWidth:'1px !important',
          },
        },
        "&.Mui-error": {
          "& fieldset": {
            borderColor: colors.sr60,
          },
        },

        "&:disabled": {
          opacity: 0.5,
        },
      },
      adornedStart: {
        paddingLeft: "6px !important",
      },
      input: {
        height: "unset",
        padding: "8px !important",
        color: colors.dn30,
        backgroundColor: colors.ln20,
        borderRadius: 4,
        "&:hover": {
          backgroundColor: colors.ln30,
        },
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {},
    },
  },
  MuiInputAdornment: {
    styleOverrides: {
      root: {},
      positionStart: {
        marginRight: 6,
      },
    },
  },
  MuiSelect: {
    styleOverrides: {
      select: {
        backgroundColor: colors.ln20,
        borderColor: colors.ln30,
        color: colors.mn50,
        "&:hover": {
          color: colors.sge20,
          backgroundColor: colors.ln20,
        },
        "&:focus": {
          borderColor: "transparent",
        },
      },
    },
  },
  MuiCheckbox: {
    styleOverrides: {
      root: {
        color: colors.mn50,
        "&:hover": {
          backgroundColor: colors.ln30,
        },
        "&.Mui-checked": {
          color: colors.sb60,
          backgroundColor: colors.ln30,
        },
        "&:disabled": {
          opacity: 0.5,
        },
        "& .MuiSvgIcon-root": {
          width: 22,
          height: 22,
        },
      },
    },
  },
  MuiRadio: {
    styleOverrides: {
      root: {
        padding: 0,
        marginRight: 8,
        color: colors.mn50,
        "&:hover": {
          backgroundColor: colors.ln30,
        },
        "&.Mui-checked": {
          color: colors.sb60,
          backgroundColor: colors.ln30,
        },
        "&:disabled": {
          opacity: 0.5,
        },
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        "&.MuiMenu-paper": {
          "& li": {
            color: colors.dn30,
            "&:hover": {
              backgroundColor: colors.ln50,
            },
            "&.Mui-selected": {
              backgroundColor: colors.ln50,
            },
          },
        },
      },
    },
  },
  MuiListItemText: {
    styleOverrides: {
      root: {
        fontWeight: 500,
      },
      primary: {
        color: colors.p100,
      },
      secondary: {
        color: colors.mn50,
      },
    },
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        fontSize: "1.6rem",
        backgroundColor: colors.p300,
        filter: "drop-shadow(0px 4px 12px rgba(55, 66, 77, 0.2))",
        color: colors.mn50,
        padding: "12px 16px",
        fontWeight: 400,
        "& .MuiTooltip-arrow": {
          color: colors.p300,
        },
      },
    },
  },
  MuiAlert: {
    styleOverrides: {
      root: {
        backgroundColor: colors.p300,
        boxShadow: "0px 4px 12px rgba(55, 66, 77, 0.2)",
        fontSize: "1.6rem",
        color: colors.mn100,
        "& .MuiAlertTitle-root": {
          fontWeight: 600,
        },
        "& .MuiIconButton-root": {
          color: colors.mn100,
          "& .MuiSvgIcon-root": {
            fontSize: "1.6rem",
          },
        },
      },
      icon: {
        marginRight: "1.6rem",
      },
      // standardSuccess: {
      //   "& .MuiAlertTitle-root": {
      //     color: colors.sg60,
      //   },
      //   "& .MuiAlert-icon": {
      //     "& div": {
      //       "&:before": {
      //         backgroundColor: colors.sg60,
      //       },
      //     },
      //   },
      // },
      // standardInfo: {
      //   "& .MuiAlertTitle-root": {
      //     color: colors.dn30,
      //   },
      //   "& .MuiAlert-icon": {
      //     "& div": {
      //       "&:before": {
      //         backgroundColor: colors.dn30,
      //       },
      //     },
      //   },
      // },
      // standardWarning: {
      //   "& .MuiAlertTitle-root": {
      //     color: colors.sy60,
      //   },
      //   "& .MuiAlert-icon": {
      //     "& div": {
      //       "&:before": {
      //         backgroundColor: colors.sy60,
      //       },
      //     },
      //   },
      // },
      // standardError: {
      //   "& .MuiAlertTitle-root": {
      //     color: colors.sr50,
      //   },
      //   "& .MuiAlert-icon": {
      //     "& div": {
      //       "&:before": {
      //         backgroundColor: colors.sr50,
      //       },
      //     },
      //   },
      // },
    },
  },
  MuiSnackbar: {
    styleOverrides: {
      root: {
        left: "auto !important",
        right: "24px !important",
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: 4,
        height: "unset",
      },
      label: {
        fontSize: "1.6rem",
        lineHeight: "2.4rem",
        fontWeight: 500,
        padding: 0,
      },
      colorDefault: {
        color: colors.sb60,
      },
      outlinedDefault: {
        background: colors.ln30,
        borderColor: colors.ln50,
      },
      colorSuccess: {
        color: colors.sg70,
      },
      outlinedSuccess: {
        background: colors.sg10,
        borderColor: colors.sg70,
      },
      colorWarning: {
        color: colors.sy50,
      },
      outlinedWarning: {
        background: colors.sy10,
        borderColor: colors.sy50,
      },
      colorError: {
        color: colors.sr60,
      },
      outlinedError: {
        background: colors.sr10,
        borderColor: colors.sr60,
      },
    },
  },
  //Radio
  MuiFormControlLabel: {
    styleOverrides: {
      root: {
        marginLeft: 0,
      },
    },
  },
};

export default components;
