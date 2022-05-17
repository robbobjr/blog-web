enum ToastStatusEnum {
  ERROR = "error",
  SUCCESS = "success",
  INFO = "info",
  WARNING = "warning"
}

enum ToastPosition {
  LEFT = "bottom-left",
  CENTER = "bottom",
}

const baseToastConfig = {
  duration: 9000,
  isClosable: true,
  position: ToastPosition.CENTER,
}

export const createCommentErrorToast = {
  title: "Falha no processo",
  description: "Seu comentário não foi persistido, meu nobre 🤷",
  status: ToastStatusEnum.ERROR,
  ...baseToastConfig,
};

export const createPostErrorToast = {
  title: "Falha no processo",
  description: "Seu post não foi persistido, o código deve estar meio porco né",
  status: ToastStatusEnum.ERROR,
  ...baseToastConfig,
};

export const createPostRateErrorToast = {
  title: "Falha no processo",
  description: "Não consegui mandar seu like :/",
  status: ToastStatusEnum.ERROR,
  ...baseToastConfig,
};

export const searchPostErrorToast = {
  title: "Falha no processo",
  description: "Falhei miseravelmente ao procurar pelos posts",
  status: ToastStatusEnum.ERROR,
  ...baseToastConfig,
};

export const deletePostErrorToast = {
  title: "Falha ao deletar",
  description: "Falhei miseravelmente ao deletar o post",
  status: ToastStatusEnum.ERROR,
  ...baseToastConfig,
};

export const jwtCopiedToast = {
  title: "API Key copied",
  status: ToastStatusEnum.INFO,
  duration: 2000,
  isClosable: true,
  variant: "subtle"
};

export const commentDeleted = {
  ...baseToastConfig,
  title: 'comentário deletado com sucesso.',
  status: ToastStatusEnum.SUCCESS,
}

export const deleteCommentErrorToast = {
  ...baseToastConfig,
  title: 'Não foi possível deletar seu comentário!',
  description: 'Não é possível, erro em todo lugar...',
  status: ToastStatusEnum.ERROR,
}

export const createCommentToast = { 
  title: 'Comentário enviado!',
  status: ToastStatusEnum.SUCCESS, 
  ...baseToastConfig, 
}