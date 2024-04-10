interface IParam {
  id: number;
  name: string;
}

export interface IParamValue {
  paramId: number;
  value: string;
}

interface IModel {
  paramValues: IParamValue[];
}

export interface IProps {
  params: IParam[];
  model: IModel;
}
