import IMailProviderTemplate from '../models/IMailProviderTemplate';

class FakeMailTemplateProvider implements IMailProviderTemplate {
  public async parse(): Promise<string> {
    return 'Mail content';
  }
}

export default FakeMailTemplateProvider;
