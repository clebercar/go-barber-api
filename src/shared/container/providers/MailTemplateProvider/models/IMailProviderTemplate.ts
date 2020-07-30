import IParseMailTemplateDTO from '../dtos/IParseMailTemplateDTO';

export default interface IMailProviderTemplate {
  parse(data: IParseMailTemplateDTO): Promise<string>;
}
