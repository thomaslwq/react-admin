// @ts-nocheck
import { Component } from 'react';
import { ApplyPluginsType } from 'umi';
import dva from 'dva';
// @ts-ignore
import createLoading from '/Users/thomaslwq/Desktop/ant-design-pro/node_modules/dva-loading/dist/index.esm.js';
import { plugin, history } from '../core/umiExports';

let app:any = null;

export function _onCreate(options = {}) {
  const runtimeDva = plugin.applyPlugins({
    key: 'dva',
    type: ApplyPluginsType.modify,
    initialValue: {},
  });
  app = dva({
    history,
    
    ...(runtimeDva.config || {}),
    // @ts-ignore
    ...(typeof window !== 'undefined' && window.g_useSSR ? { initialState: window.g_initialProps } : {}),
    ...(options || {}),
  });
  
  app.use(createLoading());
  
  (runtimeDva.plugins || []).forEach((plugin:any) => {
    app.use(plugin);
  });
  app.model({ namespace: 'global', ...(require('/Users/thomaslwq/Desktop/ant-design-pro/src/models/global.ts').default) });
app.model({ namespace: 'login', ...(require('/Users/thomaslwq/Desktop/ant-design-pro/src/models/login.ts').default) });
app.model({ namespace: 'setting', ...(require('/Users/thomaslwq/Desktop/ant-design-pro/src/models/setting.ts').default) });
app.model({ namespace: 'user', ...(require('/Users/thomaslwq/Desktop/ant-design-pro/src/models/user.ts').default) });
app.model({ namespace: 'model', ...(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/account/center/model.ts').default) });
app.model({ namespace: 'model', ...(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/account/settings/model.ts').default) });
app.model({ namespace: 'model', ...(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/dashboard/analysis/model.ts').default) });
app.model({ namespace: 'model', ...(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/dashboard/monitor/model.ts').default) });
app.model({ namespace: 'model', ...(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/dashboard/workplace/model.ts').default) });
app.model({ namespace: 'model', ...(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/form/advanced-form/model.ts').default) });
app.model({ namespace: 'model', ...(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/form/basic-form/model.ts').default) });
app.model({ namespace: 'model', ...(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/form/step-form/model.ts').default) });
app.model({ namespace: 'model', ...(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/list/basic-list/model.ts').default) });
app.model({ namespace: 'model', ...(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/list/card-list/model.ts').default) });
app.model({ namespace: 'model', ...(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/list/search/applications/model.ts').default) });
app.model({ namespace: 'model', ...(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/list/search/articles/model.ts').default) });
app.model({ namespace: 'model', ...(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/list/search/projects/model.ts').default) });
app.model({ namespace: 'model', ...(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/profile/advanced/model.ts').default) });
app.model({ namespace: 'model', ...(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/profile/basic/model.ts').default) });
app.model({ namespace: 'model', ...(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/user/login/model.ts').default) });
app.model({ namespace: 'model', ...(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/user/register/model.ts').default) });
  return app;
}

export function getApp() {
  return app;
}

export class _DvaContainer extends Component {
  constructor(props: any) {
    super(props);
    // run only in client, avoid override server _onCreate()
    if (typeof window !== 'undefined') {
      _onCreate();
    }
  }

  componentWillUnmount() {
    let app = getApp();
    app._models.forEach((model:any) => {
      app.unmodel(model.namespace);
    });
    app._models = [];
    try {
      // 释放 app，for gc
      // immer 场景 app 是 read-only 的，这里 try catch 一下
      app = null;
    } catch(e) {
      console.error(e);
    }
  }

  render() {
    const app = getApp();
    app.router(() => this.props.children);
    return app.start()();
  }
}
