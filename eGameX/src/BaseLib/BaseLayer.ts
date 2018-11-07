class BaseLayer extends eui.Component {

	protected m_data;
	protected m_layer;
	protected m_mutex;
	protected _cache;
	protected m_modal;
	protected m_effectType;
	protected m_modalAlpha;
	protected m_dataInited;
	protected m_childrenCreated;
	protected m_modalMask;
	protected __modal__mask;
	public constructor() {
		super();
		this.m_dataInited = false;
		this.m_childrenCreated = false;
		this.m_layer = LayerManager.EUI_UI_LAYER;
		this.m_mutex = false;
		this.m_modal = false;
		this.m_modalMask;
		this.m_modalAlpha = .6;
		this.m_effectType = 0;
	}


	public get data() {
		return this.m_data;
	}

	public get layer() {
		return this.m_layer;
	}
	public get mutex() {
		return this.m_mutex;
	}
	public get modal() {
		return this.m_modal;
	}
	public get modalAlpha() {
		return this.m_modalAlpha;
	}
	public get effectType() {
		return this.m_effectType;
	}
	public get modalMask() {
		return this.m_modalMask;
	}
	public setData(data: any) {
		this.m_data = data;
		this.m_dataInited = true;
		if (this.m_childrenCreated) {
			this.initData()
		}

	}

	public childrenCreated() {
		super.childrenCreated.call(this);
		this.init();
		this.m_childrenCreated = true;
		if (this.m_dataInited) {
			this.initData()
		}

	}
	public init() { }
	public initData() { }
	public destory() { }
}

