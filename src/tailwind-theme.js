export default {
  TInput: {
    fixedClasses: '',
    classes: 'form-input',
    variants: {
      danger: 'border-red-300 bg-red-100',
      success: 'border-green-300 bg-green-100',
      primary:'block w-full mt-1 text-sm p-2 border-solid border  rounded focus:border-blue-500 focus:outline-none rounded focus:border-primary  dark:border-gray-600 dark:bg-black-600 dark:text-white '
    }
  },
  TTextarea: {
    fixedClasses: '',
    classes: 'form-input',
    variants: {
      danger: 'border-red-300 bg-red-100',
      success: 'border-green-300 bg-green-100',
      primary:'block w-full mt-1 text-sm p-2 border-solid border  rounded focus:border-blue-500 focus:outline-none rounded focus:border-primary  dark:border-gray-600 dark:bg-black-600 dark:text-white '

    }
  },
  TSelect: {
    fixedClasses: '',
    classes: 'form-select',
    variants: {
      danger: 'border-red-300 bg-red-100',
      success: 'border-green-300 bg-green-100',
      secondary:'w-full py-1 block  dark:text-gray-300 text-black-900  dark:border-gray-600 dark:bg-black-600 bg-white dark:focus:shadow-outline-gray border-solid border border-gray-200 rounded focus:border-blue-400 focus:outline-none rounded focus:border-blue-400 focus:outline-none',
      primary:' block w-full mt-1 text-sm p-2 border-solid border  rounded   rounded  focus:outline-none dark:border-gray-600 dark:bg-black-600 dark:text-gray-300 '

    }
  },
  TRadio: {
    fixedClasses: 'form-radio transition duration-150 ease-in-out',
    classes: 'form-radio transition duration-150 ease-in-out',
    variants: {
      error: 'text-red-500 border-red-500 bg-red-100',
      success: 'text-green-500 border-green-500 bg-green-100',
      primary:'text-primary form-radio focus:border-primary focus:outline-none focus:shadow-outline-primary dark:focus:shadow-outline-gray'
    }
  },
  TCheckbox: {
    fixedClasses: 'form-checkbox transition duration-150 ease-in-out',
    classes: 'form-checkbox transition duration-150 ease-in-out',
    variants: {
      error: 'text-red-500 border-red-500 bg-red-100',
      success: 'text-green-500 border-green-500 bg-green-100',
      primary:'text-primary  form-checkbox focus:border-primary focus:outline-none focus:shadow-outline--primary dark:focus:shadow-outline-gray'
    }
  },
  TButton: {
    fixedClasses: 'focus:outline-none focus:shadow-outline inline-flex items-center transition ease-in-out duration-150',
    classes: 'text-white bg-blue-600 hover:bg-blue-500 focus:border-blue-700 active:bg-blue-700 text-sm font-medium border border-transparent rounded-sm',
    variants: {
      secondary: 'rounded text-gray-600 hover:bg-opacity-75 border   dark:border-black-300 hover:border-blue-500   bg-gray-50 dark:bg-black-600 dark:text-white  dark:hover:text-white',
      dark:'focus:outline-none focus:shadow-outline  transition ease-in-out duration-150 text-center  leading-5 dark:text-gray-200 text-black-300 transition-colors duration-150 dark:bg-black-400 bg-gray-200 focus:border-none focus:outline-none rounded a hover:bg-opacity-25',
      error: 'text-white bg-red-600 hover:bg-red-500 focus:border-red-700  active:bg-red-700 text-sm font-medium border border-transparent px-3 py-2 rounded-sm',
      success: 'text-white bg-green-600 hover:bg-green-500 focus:border-green-700 active:bg-green-700 text-sm font-medium border border-transparent px-3 py-2 rounded-sm',
      link: 'text-blue-500 underline hover:bg-blue-100 text-sm font-medium border border-transparent px-3 py-2 rounded ',
      primary:'text-center  leading-5 text-white transition-colors duration-150 bg-primary border border-transparent rounded active:bg-primary hover:bg-opacity-25 focus:outline-none focus:shadow-outline-primary',
      border:'leading-5 rounded-md transition-colors duration-150  border  rounded-sm active:bg-primary hover:bg-opacity-25 focus:outline-none focus:shadow-outline-primary',
    }
  },
  TInputGroup: {
    fixedClasses: {
      wrapper: 'mb-4',
      label: 'block uppercase tracking-wide text-xs font-bold mb-1',
      body: '',
      feedback: 'text-sm',
      description: 'text-sm'
    },
    classes: {
      wrapper: '',
      label: '',
      body: '',
      feedback: 'text-gray-500',
      description: 'text-gray-500'
    },
    variants: {
      danger: {
        label: 'text-red-500',
        feedback: 'text-red-500'
      }
    }
  },
  TRichSelect: {
    fixedClasses: {
      wrapper: 'relative',
      buttonWrapper: 'inline-block relative w-full',
      selectButton: 'w-full flex text-left justify-between items-center',
      selectButtonLabel: 'block truncate',
      selectButtonPlaceholder: 'block truncate',
      selectButtonIcon: 'fill-current flex-shrink-0 ml-1 h-4 w-4',
      selectButtonClearButton: 'flex flex-shrink-0 items-center justify-center absolute right-0 top-0 m-2 h-6 w-6',
      selectButtonClearIcon: 'fill-current h-3 w-3',
      dropdown: 'absolute w-full z-10',
      dropdownFeedback: '',
      loadingMoreResults: '',
      optionsList: 'overflow-auto',
      searchWrapper: 'inline-block w-full',
      searchBox: 'inline-block w-full',
      optgroup: '',
      option: '',
      highlightedOption: '',
      selectedOption: '',
      selectedHighlightedOption: '',
      optionContent: '',
      optionLabel: 'truncate block',
      selectedIcon: 'fill-current h-4 w-4',
      enterClass: '',
      enterActiveClass: '',
      enterToClass: '',
      leaveClass: '',
      leaveActiveClass: '',
      leaveToClass: ''
    },
    classes: {
      wrapper: '',
      buttonWrapper: '',
      selectButton: 'bg-white border rounded p-2 focus:outline-none focus:shadow-outline',
      selectButtonLabel: '',
      selectButtonPlaceholder: 'text-gray-500',
      selectButtonIcon: '',
      selectButtonClearButton: 'hover:bg-gray-200 text-gray-500 rounded',
      selectButtonClearIcon: '',
      dropdown: 'rounded bg-white shadow',
      dropdownFeedback: 'text-sm text-gray-500',
      loadingMoreResults: 'text-sm text-gray-500',
      optionsList: '',
      searchWrapper: 'bg-white p-2',
      searchBox: 'p-2 bg-gray-200 text-sm rounded border focus:outline-none focus:shadow-outline',
      optgroup: 'text-gray-500 uppercase text-xs py-1 px-2 font-semibold',
      option: '',
      highlightedOption: 'bg-gray-300',
      selectedOption: 'font-semibold bg-gray-100',
      selectedHighlightedOption: 'bg-gray-300 font-semibold',
      optionContent: 'flex justify-between items-center p-2 cursor-pointer',
      optionLabel: 'truncate block',
      selectedIcon: '',
      enterClass: '',
      enterActiveClass: 'opacity-0 transition ease-out duration-100',
      enterToClass: 'opacity-100',
      leaveClass: 'transition ease-in opacity-100',
      leaveActiveClass: '',
      leaveToClass: 'opacity-0 duration-75'
    },
    variants: {
      danger: {
        selectButton: 'border-red-500 text-red-500 bg-red-100 border rounded p-2 focus:outline-none focus:shadow-outline',
        selectButtonPlaceholder: 'text-red-400',
        selectButtonClearButton: 'hover:bg-red-200 text-red-500 rounded'
      },
      success: {
        selectButton: 'border-green-500 text-green-500 bg-green-100 border rounded p-2 focus:outline-none focus:shadow-outline',
        selectButtonPlaceholder: 'text-green-400',
        selectButtonClearButton: 'hover:bg-green-200 text-green-500 rounded'
      },
      primary:{
        selectButton: 'block w-full mt-1 text-sm p-2 border-solid border border-gray-200 rounded focus:border-primary focus:outline-none rounded focus:border-primary focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 ',
        selectButtonPlaceholder: 'text-red-400',
        selectButtonClearButton: 'hover:bg-red-200 text-red-500 rounded'


      }
    }
  },
  TDatepicker: {
    fixedClasses: {
      navigator: 'flex',
      navigatorViewButton: 'flex items-center',
      navigatorViewButtonIcon: 'flex-shrink-0 h-5 w-5',
      navigatorViewButtonBackIcon: 'flex-shrink-0 h-5 w-5',
      navigatorLabel: 'flex items-center py-1',
      navigatorPrevButtonIcon: 'h-6 w-6 inline-flex',
      navigatorNextButtonIcon: 'h-6 w-6 inline-flex',
      inputWrapper: 'relative',
      viewGroup: 'inline-flex',
      view: 'w-64',
      calendarDaysWrapper: 'grid grid-cols-7',
      calendarHeaderWrapper: 'grid grid-cols-7',
      monthWrapper: 'grid grid-cols-4',
      yearWrapper: 'grid grid-cols-4',
      clearButton: 'flex flex-shrink-0 items-center justify-center absolute right-0 top-0 m-2 h-6 w-6',
      clearButtonIcon: 'fill-current h-3 w-3'
    },
    classes: {
      wrapper: 'inline-flex flex-col',
      dropdownWrapper: 'relative z-10',
      dropdown: 'origin-top-left absolute rounded-md shadow-lg',
      enterClass: '',
      enterActiveClass: 'transition ease-out duration-100 transform opacity-0 scale-95',
      enterToClass: 'transform opacity-100 scale-100',
      leaveClass: 'transition ease-in transform opacity-100 scale-100',
      leaveActiveClass: '',
      leaveToClass: 'transform opacity-0 scale-95 duration-75',
      inlineWrapper: '',
      inputWrapper: '',
      input: 'form-input w-full',
      viewGroup: 'bg-white border',
      view: '',
      navigator: 'pt-2 px-2',
      navigatorViewButton: 'transition ease-in-out duration-100 inline-flex cursor-pointer rounded-full px-2 py-1 -ml-1 hover:bg-gray-200',
      navigatorViewButtonIcon: 'fill-current text-gray-500',
      navigatorViewButtonBackIcon: 'fill-current text-gray-500',
      navigatorViewButtonMonth: 'text-gray-700 font-semibold',
      navigatorViewButtonYear: 'text-gray-600 ml-1',
      navigatorViewButtonYearRange: 'text-gray-600 ml-1',
      navigatorLabel: 'py-1',
      navigatorLabelMonth: 'text-gray-700 font-semibold',
      navigatorLabelYear: 'text-gray-600 ml-1',
      navigatorPrevButton: 'transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 rounded-full p-1 ml-2 ml-auto disabled:opacity-25 disabled:cursor-not-allowed',
      navigatorNextButton: 'transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 rounded-full p-1 -mr-1 disabled:opacity-25 disabled:cursor-not-allowed',
      navigatorPrevButtonIcon: 'text-gray-500',
      navigatorNextButtonIcon: 'text-gray-500',
      calendarWrapper: 'p-2',
      calendarHeaderWrapper: '',
      calendarHeaderWeekDay: 'uppercase text-xs text-gray-600 w-8 h-8 flex items-center justify-center',
      calendarDaysWrapper: '',
      calendarDaysDayWrapper: 'w-full h-8 flex flex-shrink-0 items-center',
      otherMonthDay: 'text-sm rounded-full w-8 h-8 mx-auto hover:bg-blue-100 text-gray-400 disabled:opacity-25 disabled:cursor-not-allowed',
      emptyDay: '',
      inRangeFirstDay: 'text-sm bg-blue-500 text-white w-full h-8 rounded-l-full',
      inRangeLastDay: 'text-sm bg-blue-500 text-white w-full h-8 rounded-r-full',
      inRangeDay: 'text-sm bg-blue-200 w-full h-8 disabled:opacity-25 disabled:cursor-not-allowed',
      selectedDay: 'text-sm rounded-full w-8 h-8 mx-auto bg-blue-500 text-white disabled:opacity-25 disabled:cursor-not-allowed',
      activeDay: 'text-sm rounded-full bg-blue-100 w-8 h-8 mx-auto disabled:opacity-25 disabled:cursor-not-allowed',
      highlightedDay: 'text-sm rounded-full bg-blue-200 w-8 h-8 mx-auto disabled:opacity-25 disabled:cursor-not-allowed',
      day: 'text-sm rounded-full w-8 h-8 mx-auto hover:bg-blue-100 disabled:opacity-25 disabled:cursor-not-allowed',
      today: 'text-sm rounded-full w-8 h-8 mx-auto hover:bg-blue-100 disabled:opacity-25 disabled:cursor-not-allowed border border-blue-500',
      monthWrapper: 'p-2',
      selectedMonth: 'text-sm rounded w-full h-12 mx-auto bg-blue-500 text-white',
      activeMonth: 'text-sm rounded w-full h-12 mx-auto bg-blue-100',
      month: 'text-sm rounded w-full h-12 mx-auto hover:bg-blue-100',
      yearWrapper: 'p-2',
      year: 'text-sm rounded w-full h-12 mx-auto hover:bg-blue-100',
      selectedYear: 'text-sm rounded w-full h-12 mx-auto bg-blue-500 text-white',
      activeYear: 'text-sm rounded w-full h-12 mx-auto bg-blue-100',
      clearButton: 'hover:bg-gray-200 text-gray-500 rounded',
      clearButtonIcon: ''
    },
    variants: {
      danger: {
        input: 'bg-red-100 border-red-500 form-input w-full text-red-500',
        clearButton: 'hover:bg-red-200 text-red-500 rounded',
        otherMonthDay: 'text-sm rounded-full w-8 h-8 mx-auto hover:bg-red-100 text-gray-400 disabled:opacity-25 disabled:cursor-not-allowed',
        inRangeFirstDay: 'text-sm bg-red-500 text-white w-full h-8 rounded-l-full',
        inRangeLastDay: 'text-sm bg-red-500 text-white w-full h-8 rounded-r-full',
        inRangeDay: 'text-sm bg-red-200 w-full h-8 disabled:opacity-25 disabled:cursor-not-allowed',
        selectedDay: 'text-sm rounded-full w-8 h-8 mx-auto bg-red-500 text-white disabled:opacity-25 disabled:cursor-not-allowed',
        activeDay: 'text-sm rounded-full bg-red-100 w-8 h-8 mx-auto disabled:opacity-25 disabled:cursor-not-allowed',
        highlightedDay: 'text-sm rounded-full bg-red-200 w-8 h-8 mx-auto disabled:opacity-25 disabled:cursor-not-allowed',
        day: 'text-sm rounded-full w-8 h-8 mx-auto hover:bg-red-100 disabled:opacity-25 disabled:cursor-not-allowed',
        today: 'text-sm rounded-full w-8 h-8 mx-auto hover:bg-red-100 disabled:opacity-25 disabled:cursor-not-allowed border border-red-500',
        selectedMonth: 'text-sm rounded w-full h-12 mx-auto bg-red-500 text-white',
        activeMonth: 'text-sm rounded w-full h-12 mx-auto bg-red-100',
        month: 'text-sm rounded w-full h-12 mx-auto hover:bg-red-100',
        year: 'text-sm rounded w-full h-12 mx-auto hover:bg-red-100',
        selectedYear: 'text-sm rounded w-full h-12 mx-auto bg-red-500 text-white',
        activeYear: 'text-sm rounded w-full h-12 mx-auto bg-red-100'
      }
    }
  },
  TTag: {
    fixedClasses: '',
    classes: '',
    variants: {
      title: 'text-2xl leading-8 font-extrabold text-gray-900 tracking-tight',
      subtitle: 'text-lg leading-6 font-medium text-gray-900',
      error: 'text-red-500',
      badge: 'inline-flex items-center px-3 rounded-full text-xs font-medium leading-4 bg-gray-100 text-gray-800',
      avatar: 'inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-500 overflow-hidden leading-none text-center'
    }
  },
  TToggle: {
    fixedClasses: {
      wrapper: 'relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200',
      wrapperChecked: 'relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200',
      button: 'inline-block absolute transform translate-x-0 transition ease-in-out duration-200',
      buttonChecked: 'inline-block absolute transform translate-x-full transition ease-in-out duration-200',
      checkedPlaceholder: 'inline-block',
      uncheckedPlaceholder: 'inline-block'
    },
    classes: {
      wrapper: 'bg-gray-200 focus:outline-none focus:shadow-outline rounded-full border-2 border-transparent',
      wrapperChecked: 'bg-blue-500 focus:outline-none focus:shadow-outline rounded-full border-2 border-transparent',
      button: 'h-5 w-5 rounded-full bg-white shadow  flex items-center justify-center text-gray-400 text-xs',
      buttonChecked: 'h-5 w-5 rounded-full bg-white shadow  flex items-center justify-center text-blue-500 text-xs',
      checkedPlaceholder: 'rounded-full w-5 h-5 flex items-center justify-center text-gray-500 text-xs',
      uncheckedPlaceholder: 'rounded-full w-5 h-5 flex items-center justify-center text-gray-500 text-xs'
    },
    variants: {
      danger: {
        wrapperChecked: 'bg-red-500 focus:outline-none focus:shadow-outline rounded-full border-2 border-transparent'
      },
      secondary: {

        wrapper: 'bg-gray-500 focus:outline-none focus:shadow-outline rounded-full border-2 border-transparent',
        wrapperChecked: 'bg-gray-500 focus:outline-none focus:shadow-outline outline-none rounded-full border-2 border-transparent'
      },
      success: {
        wrapperChecked: 'bg-green-500 focus:outline-none focus:shadow-outline rounded-full border-2 border-transparent'
      },
      box: {
        wrapper: 'bg-gray-200 focus:outline-none focus:shadow-outline rounded-sm border-2 border-transparent',
        wrapperChecked: 'bg-blue-500 focus:outline-none focus:shadow-outline rounded-sm border-2 border-transparent',
        button: 'h-6 w-6 rounded-sm bg-white shadow  flex items-center justify-center text-gray-400 text-xs',
        buttonChecked: 'h-6 w-6 rounded-sm bg-white shadow  flex items-center justify-center text-blue-500 text-xs',
        checkedPlaceholder: 'rounded-sm h-6 w-6 flex items-center justify-center text-gray-500 text-xs',
        uncheckedPlaceholder: 'rounded-sm h-6 w-6 flex items-center justify-center text-gray-500 text-xs'
      }
    }
  },
  TAlert: {
    fixedClasses: {
      wrapper: 'rounded p-4 flex text-sm',
      body: 'flex-grow',
      close: 'ml-4 rounded',
      closeIcon: 'h-5 w-5 fill-current'
    },
    classes: {
      wrapper: 'bg-blue-100 border-blue-500',
      body: 'text-blue-700',
      close: 'text-blue-700 hover:text-blue-500 hover:bg-blue-200',
      closeIcon: 'h-5 w-5 fill-current'
    },
    variants: {
      danger: {
        wrapper: 'bg-red-100 border-red-500',
        body: 'text-red-700',
        close: 'text-red-700 hover:text-red-500 hover:bg-red-200'
      },
      success: {
        wrapper: 'bg-green-100 border-green-500',
        body: 'text-green-700',
        close: 'text-green-700  hover:text-green-500 hover:bg-green-200'
      }
    }
  },
  TCard: {
    fixedClasses: {
      wrapper: 'rounded max-w-lg mx-auto shadow',
      body: 'p-4',
      header: 'p-4 border-b',
      footer: 'p-4 border-t'
    },
    classes: {
      wrapper: 'bg-white',
      body: '',
      header: '',
      footer: ''
    },
    variants: {
      danger: {
        wrapper: 'bg-red-100 text-red-700',
        header: 'border-red-200 text-red-700',
        footer: 'border-red-200 bg-red-100 text-red-700'
      }
    }
  },
  TModal: {
    fixedClasses: {
      overlay: 'z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-opacity-50',
      wrapper: 'z-50 relative mx-auto my-0 max-w-lg mt-12',
      modal: 'bg-white shadow overflow-hidden relative',
      body: 'p-4',
      header: 'p-4  text-sm font-semibold uppercase text-gray-700',
      footer: 'p-2 border-t',
      close: 'absolute right-0 top-0 m-3 text-gray-700 dark:text-gray-300',
      closeIcon: 'h-5 w-5 fill-current',

    },
    classes: {
      overlay: 'bg-black ',
      wrapper: '',
      modal: '',
      body: 'p-4',
      header: 'text-gray-700',
      footer: '',
      close: 'text-gray-700 hover:text-gray-600',
      closeIcon: ''
    },
    variants: {
      danger: {
        overlay: 'bg-red-500',
        header: 'border-red-100 text-red-700',
        footer: 'border-red-100 bg-red-100',
        close: 'text-red-700 hover:text-red-600'
      }
      ,primary: {
          modal: 'bg-white shadow dark:bg-bodydark overflow-hidden relative',
          body: 'p-4',
          header: 'p-4  text-sm font-semibold uppercase text-gray-700 dark:text-gray-300',
          footer: 'p-2 border-t',
          close: 'absolute right-0 top-0 m-3 text-gray-700 dark:text-gray-300 hover:text-red-500',
        }

    }
  },
  TDialog: {
    fixedClasses: {
      overlay: 'overflow-auto scrolling-touch left-0 top-0 bottom-0 right-0 w-full h-full fixed',
      wrapper: 'relative mx-auto ',
      dialog: 'overflow-hidden relative',
      close: 'absolute right-0 top-0'
    },
    classes: {
      close: 'bg-gray-100 flex h-8 items-center justify-center m-1 rounded-full text-gray-700 w-8 hover:bg-gray-200',
      closeIcon: 'h-5 w-5 fill-current',
      overlay: 'z-40 bg-black bg-opacity-50',
      wrapper: 'z-50 max-w-md',
      dialog: 'bg-white rounded p-4 text-left overflow-hidden shadow ',
      body: '',
      buttons: 'mt-4 flex space-x-4 justify-center',
      iconWrapper: 'mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-200',
      icon: 'w-6 h-6 text-gray-700',
      content: 'mt-3',
      titleWrapper: '',
      title: 'text-lg leading-6 font-medium text-gray-900 text-center',
      textWrapper: 'mt-2 text-gray-600',
      text: '',
      cancelButton: 'inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5 w-full',
      okButton: 'inline-flex justify-center rounded-md border border-transparent px-4 py-2 bg-blue-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5 w-full',
      inputWrapper: 'mt-3 flex items-center space-x-4 justify-center',
      input: 'form-input w-full',
      select: 'form-select w-full',
      radioWrapper: 'flex items-center space-x-2',
      radio: 'form-radio',
      radioText: '',
      checkboxWrapper: 'flex items-center space-x-2',
      checkbox: 'form-checkbox',
      checkboxText: '',
      errorMessage: 'text-red-500 block text-sm',
      busyWrapper: 'absolute bg-opacity-50 bg-white flex h-full items-center justify-center left-0 top-0 w-full',
      busyIcon: 'animate-spin h-6 w-6 fill-current text-gray-500',
      overlayEnterClass: '',
      overlayEnterActiveClass: 'opacity-0 transition ease-out duration-100',
      overlayEnterToClass: 'opacity-100',
      overlayLeaveClass: 'transition ease-in opacity-100',
      overlayLeaveActiveClass: '',
      overlayLeaveToClass: 'opacity-0 duration-75',
      enterClass: '',
      enterActiveClass: '',
      enterToClass: '',
      leaveClass: '',
      leaveActiveClass: '',
      leaveToClass: ''
    },
    variants: {
      danger: {
        overlay: 'bg-red-500 bg-opacity-50',
        cancelButton: 'inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-red-300 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5 w-full',
        okButton: 'inline-flex justify-center rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5 w-full',
        iconWrapper: 'mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-200',
        icon: 'w-6 h-6 text-red-700'
      },
      horizontal: {
        overlay: 'z-40 bg-black bg-opacity-50',
        content: '',
        title: 'text-lg leading-6 font-medium text-gray-900',
        body: 'flex space-x-4'
      }
    }
  },
  TTable: {
    classes: {
      table: 'shadow min-w-full divide-y divide-gray-200',
      tbody: 'bg-white divide-y divide-gray-200',
      td: 'px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700',
      theadTh: 'px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider'
    },
    variants: {
      thin: {
        td: 'p-1 whitespace-no-wrap text-sm leading-4 text-gray-700',
        theadTh: 'p-1 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider'
      },
      primary:{
        table: 'w-full whitespace-no-wrap text-black-300  dark:text-white',
        tbody: 'bg-white divide-y dark:divide-gray-700 dark:bg-gray-800',
        td: 'px-4 py-3 dark:bg-black-500',
        theadTh: 'px-4 py-3 uppercase font-normal text-left bg-primary text-white'
      }
    }
  },
  TPagination: {
    classes: {
      wrapper: 'table border-collapse text-center bg-white mx-auto mt-2',
      element: 'w-8 h-8 border table-cell',
      disabledElement: 'w-8 h-8 border table-cell',
      ellipsisElement: 'w-8 h-8 border hidden md:table-cell',
      activeButton: 'bg-gray-300 w-full h-full',
      disabledButton: 'opacity-25 w-full h-full cursor-not-allowed',
      button: 'hover:bg-gray-200 w-full h-full',
      ellipsis: ''
    },
    variants: {
      rounded: {
        wrapper: 'flex',
        element: 'w-8 h-8 mx-1',
        disabledElement: 'w-8 h-8 mx-1',
        ellipsisElement: 'w-8 h-8 mx-1',
        activeButton: 'bg-blue-500 w-full h-full text-white rounded-full ',
        disabledButton: 'opacity-25 w-full h-full cursor-not-allowed rounded-full',
        button: 'hover:bg-blue-100 w-full h-full text-blue-500 rounded-full ',
        ellipsis: 'text-gray-500'
      },
      table:{
        wrapper: 'table border-collapse text-center dark:bg-black-500 bg-white dark:text-white text-black-300 ml-auto mt-2',
        element: 'w-8 h-8 table-cell',
        disabledElement: 'w-8 h-8  table-cell',
        ellipsisElement: 'w-8 h-8  table-cell',
        activeButton: 'bg-primary text-white w-full h-full',
        disabledButton: 'opacity-25 w-full h-full cursor-not-allowed',
        button: 'hover:bg-gray-200 w-full h-full',
        ellipsis: ''
      }
    }
  },
  TDropdown: {
    classes: {
      button: 'px-4 py-2 flex items-center border rounded hover:text-gray-700',
      wrapper: 'inline-flex flex-col',
      dropdownWrapper: 'relative z-10',
      dropdown: 'origin-top-right absolute right-0 w-56 rounded-md shadow-lg bg-white',
      enterClass: '',
      enterActiveClass: 'transition ease-out duration-100 transform opacity-100 scale-95',
      enterToClass: 'transform opacity-100 scale-100',
      leaveClass: 'transition ease-in transform opacity-100 scale-100',
      leaveActiveClass: '',
      leaveToClass: 'transform opacity-100 scale-95 duration-75'
    },
    variants: {
      danger: {
        button: 'px-4 py-2 flex items-center border rounded bg-red-100 border-red-600 text-red-500 hover:text-red-400',
        dropdown: 'origin-top-right absolute right-0 w-56 rounded-md shadow bg-red-100'
      },
      header: {
        button: 'px-4  flex items-center border-none rounded-full dark:bg-gray-500 bg-gray-200 text-black dark:text-white ',
        dropdown: 'origin-top-right absolute right-0 profile-header rounded-md cursor-pointer shadow text-white bg-black-200'
      },
      primary: {
        button: 'px-4  flex items-center border-none rounded-full text-black-300  dark:text-white dark:bg-black-500 bg-white ',
        dropdown: 'origin-top-right absolute w-64 right-0 whitespace-nowrap rounded-md cursor-pointer shadow dark:text-white dark:bg-gray-700 bg-white'
      },


    }
  }
}


