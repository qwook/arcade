// #include <node.h>
// #include <v8.h>

// #include <sstream>
// #include <iostream>
// #include <vector>
// #include <string>
// #include <utility>
// #include <algorithm>
// #include <ctime>

// #include <windows.h>
// #include <tlhelp32.h>

// using namespace v8;

// std::string exeName = "";
// bool running = false;

// DWORD currentThreadId;
// DWORD currentProcessId;

// bool foundProcess = false;
// DWORD processId = NULL;
// HANDLE processHandle = NULL;

// bool foundhWnd = false;
// DWORD processThreadId = NULL;
// HWND hWnd = NULL;
// clock_t startTime;

// std::vector<HWND> hWnds;

// v8::Persistent<v8::Function> cbLoading;
// v8::Persistent<v8::Function> cbFound;
// v8::Persistent<v8::Function> cbClosed;
// v8::Persistent<v8::Function> cbLog;

// struct Size {
// 	long width;
// 	long height;
// };

// void Method(const FunctionCallbackInfo<Value>& args) {
// 	args.GetReturnValue().Set(42);
// }

// bool IsProcessRunning(HANDLE handle) {
// 	DWORD exitCode;
// 	if (!GetExitCodeProcess(handle, &exitCode)) {
// 		// todo: print error;
// 	}
// 	return exitCode == 259;
// }

// /**
//  * Get the dimensions of the main monitor.
//  * @return {Object} width and height of the screen
//  */
// Size GetScreenSize() {
// 	Size size;
// 	size.width = GetSystemMetrics(SM_CXSCREEN);
// 	size.height = GetSystemMetrics(SM_CYSCREEN);
// 	return size;
// }

// /**
//  * Get the dimension of a window from it's handle
//  * @param  {Handle} hWnd the handle
//  * @return {Object} width and height of the screen.
//  */
// Size GetWindowSize(HWND hWnd) {
// 	Size size;

// 	RECT rect;
// 	GetWindowRect(hWnd, &rect);
// 	size.width = rect.right - rect.left;
// 	size.height = rect.bottom - rect.top;

// 	return size;
// }

// void CallLoadingCallback() {
// 	v8::Handle<v8::Value> *args = NULL;
// 	v8::Local<v8::Function> value = v8::Local<v8::Function>::New(v8::Isolate::GetCurrent(), cbLoading);
// 	value->Call(v8::Isolate::GetCurrent()->GetCurrentContext(), value, 0, args);
// 	// auto cb = cbLoading.As<v8::Function>();
// 	// cb->Call();
// 	// ((v8::Function )cbLoading).As<v8::Function>()->Call(v8::Isolate::GetCurrent(), v8::Null(v8::Isolate::GetCurrent()), 0, args);
// 	// MessageBox (NULL, "loading_cb", " c_cb", MB_OK);
// }

// void CallFoundCallback() {
// 	// v8::Handle<v8::Value> args = v8::Array::New(v8::Isolate::GetCurrent(), 0);
// 	// v8::Function::Cast(&cbFound);
// 	// cbFound.As<v8::Function>()->Call(v8::Isolate::GetCurrent(), v8::Null(v8::Isolate::GetCurrent()), 0, &args);

// 	v8::Handle<v8::Value> *args = NULL;
// 	v8::Local<v8::Function> value = v8::Local<v8::Function>::New(v8::Isolate::GetCurrent(), cbFound);
// 	value->Call(v8::Isolate::GetCurrent()->GetCurrentContext(), value, 0, args);
// 	// MessageBox (NULL, "found_cb", " found_cb", MB_OK);
// }

// void CallClosedCallback() {
// 	v8::Handle<v8::Value> *args = NULL;
// 	v8::Local<v8::Function> value = v8::Local<v8::Function>::New(v8::Isolate::GetCurrent(), cbClosed);
// 	value->Call(v8::Isolate::GetCurrent()->GetCurrentContext(), value, 0, args);
// 	// v8::Handle<v8::Value> args = v8::Array::New(v8::Isolate::GetCurrent(), 0);
// 	// cbClosed.As<v8::Function>()->Call(v8::Isolate::GetCurrent(), v8::Null(v8::Isolate::GetCurrent()), 0, &args);
// 	// MessageBox (NULL, "c_cb", " c_cb", MB_OK);
// }

// void LogCallback(std::string &string) {

// 	Handle<String> arg = String::NewFromUtf8(v8::Isolate::GetCurrent(), string.c_str()).ToLocalChecked();

// 	v8::Handle<v8::Value> args[] = {
// 		arg
// 	};

// 	// v8::Handle<v8::Value> *args = NULL;

// 	v8::Local<v8::Function> value = v8::Local<v8::Function>::New(v8::Isolate::GetCurrent(), cbLog);
// 	value->Call(v8::Isolate::GetCurrent()->GetCurrentContext(), value, 1, args);
// }

// void Start(const FunctionCallbackInfo<Value>& args) {
// 	// std::cout << "Start" << std::endl;
// 	currentThreadId = GetCurrentThreadId();
// 	currentProcessId = GetCurrentProcessId();

// 	::exeName = *v8::String::Utf8Value(v8::Isolate::GetCurrent(), args[0]);
// 	::running = true;

// 	::foundProcess = false;
// 	::processId = NULL;
// 	::processHandle = NULL;

// 	::foundhWnd = false;
// 	::processThreadId = NULL;
// 	::hWnd = NULL;

// 	::startTime = clock();

// 	// MessageBox (NULL, "start", exeName.c_str(), MB_OK);
// 	std::cout << "Bleh" << std::endl;
// }

// void Tick(const FunctionCallbackInfo<Value>& args) {
// 	if (clock() <= ::startTime) {return;}
// 	if (!running) {return;}

// 	::startTime = clock() + 1;

// 	if (!::foundProcess) {
// 	// step 1. we haven't found the process yet
//     // dedicate each tick to finding the process.

// 		// callback
// 		CallLoadingCallback();

// 	    // create a snapshot of all processes
// 		HANDLE snapshot = CreateToolhelp32Snapshot(TH32CS_SNAPPROCESS, 0);
// 		PROCESSENTRY32 entry;

// 		std::stringstream ss;

// 	    // Loop through all the processes in our snapshot
// 		bool looping = Process32First(snapshot, &entry);
// 		do {
// 			std::string szExeFile = entry.szExeFile;
// 			std::transform(szExeFile.begin(), szExeFile.end(), szExeFile.begin(), toupper);
// 			std::transform(exeName.begin(), exeName.end(), exeName.begin(), toupper);

// 			if (szExeFile.compare(exeName) == 0) {
// 				::processId = entry.th32ProcessID;
// 				::processHandle = OpenProcess(0x0001 | 0x0800 | 0x1000, true, ::processId);

// 				// inserted window finding here

// 				hWnds.clear();
// 				EnumWindows([](HWND hWnd, LPARAM lParam)->BOOL{
// 					hWnds.push_back(hWnd);
// 					return true;
// 				}, 0);


// 				for (HWND hWnd : hWnds) {

// 					if (IsWindow(hWnd) && IsWindowVisible(hWnd)) {
// 						DWORD processId;
// 						DWORD threadId = GetWindowThreadProcessId(hWnd, &processId);

// 							// char test[200];
// 							// sprintf(test, "%d == %d", processId, ::processId);
// 							// MessageBox (NULL, test, test, MB_OK);

// 						if (processId == ::processId && !::foundhWnd) {
// 							Size size = GetWindowSize(hWnd);
// 							Size screenSize = GetScreenSize();

// 							// char test[200];
// 							// sprintf(test, "%d == %d, %d == %d", size.width, screenSize.width, size.height, screenSize.height);
// 							// MessageBox (NULL, test, test, MB_OK);

// 							// std::stringstream stream;
// 							// stream << screenSize.width << " " << size.width << " " << screenSize.height << " " << size.height;
// 							// LogCallback(stream.str());

// 							if (size.width == screenSize.width && size.height == screenSize.height) {
// 								DWORD fgProcessId;
// 								DWORD fgThreadId = GetWindowThreadProcessId(GetForegroundWindow(), &fgProcessId);
// 								AttachThreadInput(::currentThreadId, fgThreadId, true);
// 								AttachThreadInput(::processThreadId, ::currentThreadId, true);

// 								::foundProcess = true;
// 								::foundhWnd = true;
// 								::processThreadId = threadId;
// 								::hWnd = hWnd;
// 								CallFoundCallback();
// 								CloseHandle(snapshot);
// 								// SetWindowPos(::hWnd, NULL, 0, 0, size.width, size.height, SWP_NOMOVE | SWP_NOSIZE);
// 								return;
// 							}
// 						}
// 					}

// 				}

// 			}

// 			looping = Process32Next(snapshot, &entry);
// 		} while (looping);

// 		// char test[200];
// 		// sprintf(test, "%d == %d", processId, ::processId);
// 		// MessageBox (NULL, ss.str().c_str(), "test", MB_OK);
// 		// std::cout << ss.str() << std::endl;

// 	    // Clean up
// 	    CloseHandle(snapshot);
// 	// } else if (!::foundhWnd && IsProcessRunning(::processHandle)) {
// 	// step 2. so we found the process,
//     // now we need to find the window that goes with the process.

// 		// hWnds.clear();
// 		// EnumWindows([](HWND hWnd, LPARAM lParam)->BOOL{
// 		// 	hWnds.push_back(hWnd);
// 		// 	return true;
// 		// }, 0);

// 		// for (HWND hWnd : hWnds) {

// 		// 	if (IsWindow(hWnd) && IsWindowVisible(hWnd)) {
// 		// 		DWORD processId;
// 		// 		DWORD threadId = GetWindowThreadProcessId(hWnd, &processId);

// 		// 			// char test[200];
// 		// 			// sprintf(test, "%d == %d", processId, ::processId);
// 		// 			// MessageBox (NULL, test, test, MB_OK);

// 		// 		if (processId == ::processId && !::foundhWnd) {
// 		// 			Size size = GetWindowSize(hWnd);
// 		// 			Size screenSize = GetScreenSize();

// 		// 			// char test[200];
// 		// 			// sprintf(test, "%d == %d, %d == %d", size.width, screenSize.width, size.height, screenSize.height);
// 		// 			// MessageBox (NULL, test, test, MB_OK);

// 		// 			if (size.width == screenSize.width && size.height == screenSize.height) {
// 		// 				::foundhWnd = true;
// 		// 				::processThreadId = threadId;
// 		// 				::hWnd = hWnd;
// 		// 				CallFoundCallback();
// 		// 				break;;
// 		// 			}
// 		// 		}
// 		// 	}

// 		// }

// 	} else if (IsWindow(::hWnd) && IsProcessRunning(::processHandle)) {
//     // step 3. we've found the window, and it is up and running!

//         // attach to the foreground window (this ensures that
//         // we have permission to bring windows into focus)
// 		DWORD fgProcessId;
// 		DWORD fgThreadId = GetWindowThreadProcessId(hWnd, &fgProcessId);
// 		// AttachThreadInput(::currentThreadId, fgThreadId, true);
// 		// AttachThreadInput(::processThreadId, ::currentThreadId, true);

// 		// check if our window is in focus
// 		// if it isn't, then bring it to focus
// 		if (GetFocus() != ::hWnd) {
//             // ping the window to check if it's responding
// 			// DWORD_PTR result;
// 			// LRESULT hung = SendMessageTimeoutW(
// 			// 	::hWnd,
// 			// 	WM_GETTEXT,
// 			// 	0,
// 			// 	0,
// 			// 	SMTO_ABORTIFHUNG | SMTO_BLOCK,
// 			// 	1000,
// 			// 	&result
// 			// 	);

// 			// application is hung, we should exit.
// 			// if (hung == 0) {
// 				// TerminateProcess(::processHandle, 1);
// 			// }
			
// 			// ShowWindow(::hWnd, 0); // hide
// 			// ShowWindow(::hWnd, 9); // show
// 			// SetFocus(::hWnd);
//    //          // ^^ (I know, it's hacky.)
// 			// SetForegroundWindow(::hWnd);
// 			// SetActiveWindow(::hWnd);

// 			SetForegroundWindow(::hWnd);
// 			SetCapture(::hWnd);
// 			SetFocus(::hWnd);
// 			SetActiveWindow(::hWnd);
// 			EnableWindow(::hWnd, TRUE);
// 			// ShowWindow(::hWnd, 0); // hide
// 			// ShowWindow(::hWnd, 9); // show
// 			BringWindowToTop(::hWnd);

// 			// SetWindowPos(::hWnd, HWND_TOPMOST, 0, 0, 0, 0, SWP_SHOWWINDOW || SWP_NOMOVE || SWP_NOSIZE);
// 		}

// 		// remove all attachments to the foreground window
//         // (we don't need it until next tick)
// 		// AttachThreadInput(::processThreadId, ::currentThreadId, false);
// 		// AttachThreadInput(::currentThreadId, fgThreadId, false);

// 	} else if (!IsProcessRunning(::processHandle)) {
//     // step 4. process is closed! kill everything!

// 		DWORD fgProcessId;
// 		DWORD fgThreadId = GetWindowThreadProcessId(hWnd, &fgProcessId);
// 		AttachThreadInput(::processThreadId, ::currentThreadId, false);
// 		AttachThreadInput(::currentThreadId, fgThreadId, false);

// 		CloseHandle(::processHandle);

// 		// the window is no longer open
// 		// kill this monitor.
// 		::running = false;

// 		// reset screen resolution to default
// 		// in case the game doesn't do that
// 		ChangeDisplaySettingsW(0, 0);

// 		CallClosedCallback();
// 	}
// }

// void Kill(const FunctionCallbackInfo<Value>& args) {
// 	// MessageBox (NULL, "Kill", " kills", MB_OK);
// 	::running = false;
// }

// void SetCallbacks(const FunctionCallbackInfo<Value>& args) {
// 	HandleScope scope(args.GetIsolate());
// 	Handle<Function> cbLoadingHandle = Handle<Function>::Cast(args[0]);
// 	cbLoading.Reset(args.GetIsolate(), cbLoadingHandle);

// 	Handle<Function> cbFoundHandle = Handle<Function>::Cast(args[1]);
// 	cbFound.Reset(args.GetIsolate(), cbFoundHandle);

// 	Handle<Function> cbClosedHandle = Handle<Function>::Cast(args[2]);
// 	cbClosed.Reset(args.GetIsolate(), cbClosedHandle);

// 	Handle<Function> cbLogHandle = Handle<Function>::Cast(args[3]);
// 	cbLog.Reset(args.GetIsolate(), cbLogHandle);

// 	// MessageBox (NULL, "set callbacks", "set callbacks", MB_OK);
// }

// void IsRunning(const FunctionCallbackInfo<Value>& args) {
// 	args.GetReturnValue().Set(v8::Boolean::New(args.GetIsolate(), running));
// }

// void init(Handle<Object> exports) {
// 	// MessageBox (NULL, "heyy", " heeey", MB_OK);
// 	Isolate* isolate = Isolate::GetCurrent();
// 	v8::Local<Context> context = isolate->GetCurrentContext();
// 	exports->Set(context, String::NewFromUtf8(isolate, "Start").ToLocalChecked(),
// 		FunctionTemplate::New(isolate, Start)->GetFunction(context).ToLocalChecked());
// 	exports->Set(context, String::NewFromUtf8(isolate, "Tick").ToLocalChecked(),
// 		FunctionTemplate::New(isolate, Tick)->GetFunction(context).ToLocalChecked());
// 	exports->Set(context, String::NewFromUtf8(isolate, "Kill").ToLocalChecked(),
// 		FunctionTemplate::New(isolate, Kill)->GetFunction(context).ToLocalChecked());
// 	exports->Set(context, String::NewFromUtf8(isolate, "SetCallbacks").ToLocalChecked(),
// 		FunctionTemplate::New(isolate, SetCallbacks)->GetFunction(context).ToLocalChecked());
// 	exports->Set(context, String::NewFromUtf8(isolate, "IsRunning").ToLocalChecked(),
// 		FunctionTemplate::New(isolate, IsRunning)->GetFunction(context).ToLocalChecked());
// }

// NODE_MODULE(monitor, init)

#include <node.h>
#include <node_object_wrap.h>
#include <v8.h>
#include <windows.h>
#include <tlhelp32.h>
#include <string>
#include <vector>
#include <algorithm>
#include <ctime>

using namespace v8;

struct Size {
	long width;
	long height;
};

class Monitor : public node::ObjectWrap {
public:
	static void Init(Local<Object> exports);

private:
	explicit Monitor();
	~Monitor();

	static void New(const FunctionCallbackInfo<Value>& args);
	static void Start(const FunctionCallbackInfo<Value>& args);
	static void Tick(const FunctionCallbackInfo<Value>& args);
	static void Kill(const FunctionCallbackInfo<Value>& args);
	static void SetCallbacks(const FunctionCallbackInfo<Value>& args);
	static void IsRunning(const FunctionCallbackInfo<Value>& args);

	void CallLoadingCallback(Isolate* isolate, Local<Context> context);
	void CallFoundCallback(Isolate* isolate, Local<Context> context);
	void CallClosedCallback(Isolate* isolate, Local<Context> context);
	void LogCallback(Isolate* isolate, Local<Context> context, std::string &string);

	bool IsProcessRunning(HANDLE handle);
	Size GetScreenSize();
	Size GetWindowSize(HWND hWnd);

	std::string exeName;
	bool running;

	DWORD currentThreadId;
	DWORD currentProcessId;

	bool foundProcess;
	DWORD processId;
	HANDLE processHandle;

	bool foundhWnd;
	DWORD processThreadId;
	HWND hWnd;
	clock_t startTime;

	std::vector<HWND> hWnds;

	Persistent<Function> cbLoading;
	Persistent<Function> cbFound;
	Persistent<Function> cbClosed;
	Persistent<Function> cbLog;
};

Monitor::Monitor() : running(false), foundProcess(false), foundhWnd(false),
	processId(NULL), processHandle(NULL), processThreadId(NULL), hWnd(NULL) {}

Monitor::~Monitor() {
	cbLoading.Reset();
	cbFound.Reset();
	cbClosed.Reset();
	cbLog.Reset();
	if (processHandle) CloseHandle(processHandle);
}

void Monitor::New(const FunctionCallbackInfo<Value>& args) {
	if (args.IsConstructCall()) {
		Monitor* obj = new Monitor();
		obj->Wrap(args.This());
		args.GetReturnValue().Set(args.This());
	} else {
		Isolate* isolate = args.GetIsolate();
		Local<FunctionTemplate> tpl = FunctionTemplate::New(isolate, New);
		Local<Context> context = isolate->GetCurrentContext();
		Local<Function> cons = tpl->GetFunction(context).ToLocalChecked();
		Local<Object> result = cons->NewInstance(context).ToLocalChecked();
		args.GetReturnValue().Set(result);
	}
}

void Monitor::Start(const FunctionCallbackInfo<Value>& args) {
	Isolate* isolate = args.GetIsolate();
	Monitor* obj = ObjectWrap::Unwrap<Monitor>(args.Holder());
	obj->exeName = *String::Utf8Value(isolate, args[0]);
	obj->running = true;
	obj->currentThreadId = GetCurrentThreadId();
	obj->currentProcessId = GetCurrentProcessId();
	obj->startTime = clock();
}

void Monitor::Kill(const FunctionCallbackInfo<Value>& args) {
	Monitor* obj = ObjectWrap::Unwrap<Monitor>(args.Holder());
	obj->running = false;
}

void Monitor::IsRunning(const FunctionCallbackInfo<Value>& args) {
	Monitor* obj = ObjectWrap::Unwrap<Monitor>(args.Holder());
	args.GetReturnValue().Set(Boolean::New(args.GetIsolate(), obj->running));
}

void Monitor::SetCallbacks(const FunctionCallbackInfo<Value>& args) {
	Isolate* isolate = args.GetIsolate();
	Monitor* obj = ObjectWrap::Unwrap<Monitor>(args.Holder());
	obj->cbLoading.Reset(isolate, Local<Function>::Cast(args[0]));
	obj->cbFound.Reset(isolate, Local<Function>::Cast(args[1]));
	obj->cbClosed.Reset(isolate, Local<Function>::Cast(args[2]));
	obj->cbLog.Reset(isolate, Local<Function>::Cast(args[3]));
}

bool Monitor::IsProcessRunning(HANDLE handle) {
	DWORD exitCode;
	return GetExitCodeProcess(handle, &exitCode) && exitCode == STILL_ACTIVE;
}

Size Monitor::GetScreenSize() {
	return { GetSystemMetrics(SM_CXSCREEN), GetSystemMetrics(SM_CYSCREEN) };
}

Size Monitor::GetWindowSize(HWND hWnd) {
	RECT rect;
	GetWindowRect(hWnd, &rect);
	return { rect.right - rect.left, rect.bottom - rect.top };
}

void Monitor::CallLoadingCallback(Isolate* isolate, Local<Context> context) {
	Local<Function> cb = Local<Function>::New(isolate, cbLoading);
	cb->Call(context, Null(isolate), 0, nullptr);
}

void Monitor::CallFoundCallback(Isolate* isolate, Local<Context> context) {
	Local<Function> cb = Local<Function>::New(isolate, cbFound);
	cb->Call(context, Null(isolate), 0, nullptr);
}

void Monitor::CallClosedCallback(Isolate* isolate, Local<Context> context) {
	Local<Function> cb = Local<Function>::New(isolate, cbClosed);
	cb->Call(context, Null(isolate), 0, nullptr);
}

void Monitor::LogCallback(Isolate* isolate, Local<Context> context, std::string &string) {
	Local<String> arg = String::NewFromUtf8(isolate, string.c_str()).ToLocalChecked();
	Local<Function> cb = Local<Function>::New(isolate, cbLog);
	Local<Value> args[] = { arg };
	cb->Call(context, Null(isolate), 1, args);
}

void Monitor::Tick(const FunctionCallbackInfo<Value>& args) {
	Monitor* obj = ObjectWrap::Unwrap<Monitor>(args.Holder());
	Isolate* isolate = args.GetIsolate();
	Local<Context> context = isolate->GetCurrentContext();

	if (clock() <= obj->startTime || !obj->running) return;
	obj->startTime = clock() + 1;

	if (!obj->foundProcess) {
		obj->CallLoadingCallback(isolate, context);
		HANDLE snapshot = CreateToolhelp32Snapshot(TH32CS_SNAPPROCESS, 0);
		PROCESSENTRY32 entry = { sizeof(PROCESSENTRY32) };
		bool looping = Process32First(snapshot, &entry);
		while (looping) {
			std::string szExeFile = entry.szExeFile;
			std::transform(szExeFile.begin(), szExeFile.end(), szExeFile.begin(), ::toupper);
			std::string exeNameUpper = obj->exeName;
			std::transform(exeNameUpper.begin(), exeNameUpper.end(), exeNameUpper.begin(), ::toupper);
			if (szExeFile == exeNameUpper) {
				obj->processId = entry.th32ProcessID;
				obj->processHandle = OpenProcess(0x0001 | 0x0800 | 0x1000, TRUE, obj->processId);
				obj->hWnds.clear();
				EnumWindows([](HWND hWnd, LPARAM lParam) -> BOOL {
					auto* self = reinterpret_cast<Monitor*>(lParam);
					self->hWnds.push_back(hWnd);
					return TRUE;
				}, reinterpret_cast<LPARAM>(obj));
				for (HWND hWnd : obj->hWnds) {
					if (IsWindow(hWnd) && IsWindowVisible(hWnd)) {
						DWORD pid;
						DWORD tid = GetWindowThreadProcessId(hWnd, &pid);
						if (pid == obj->processId && !obj->foundhWnd) {
							Size size = obj->GetWindowSize(hWnd);
							Size screenSize = obj->GetScreenSize();
							if (size.width == screenSize.width && size.height == screenSize.height) {
								obj->foundProcess = true;
								obj->foundhWnd = true;
								obj->processThreadId = tid;
								obj->hWnd = hWnd;
								obj->CallFoundCallback(isolate, context);
								CloseHandle(snapshot);
								return;
							}
						}
					}
				}
			}
			looping = Process32Next(snapshot, &entry);
		}
		CloseHandle(snapshot);
	} else if (IsWindow(obj->hWnd) && obj->IsProcessRunning(obj->processHandle)) {
		if (GetFocus() != obj->hWnd) {
			SetForegroundWindow(obj->hWnd);
			SetCapture(obj->hWnd);
			SetFocus(obj->hWnd);
			SetActiveWindow(obj->hWnd);
			EnableWindow(obj->hWnd, TRUE);
			BringWindowToTop(obj->hWnd);
		}
	} else if (!obj->IsProcessRunning(obj->processHandle)) {
		CloseHandle(obj->processHandle);
		obj->running = false;
		ChangeDisplaySettingsW(0, 0);
		obj->CallClosedCallback(isolate, context);
	}
}

void Monitor::Init(Local<Object> exports) {
	Isolate* isolate = exports->GetIsolate();
	Local<FunctionTemplate> tpl = FunctionTemplate::New(isolate, New);
	tpl->SetClassName(String::NewFromUtf8(isolate, "Monitor").ToLocalChecked());
	tpl->InstanceTemplate()->SetInternalFieldCount(1);

	NODE_SET_PROTOTYPE_METHOD(tpl, "start", Start);
	NODE_SET_PROTOTYPE_METHOD(tpl, "tick", Tick);
	NODE_SET_PROTOTYPE_METHOD(tpl, "kill", Kill);
	NODE_SET_PROTOTYPE_METHOD(tpl, "setCallbacks", SetCallbacks);
	NODE_SET_PROTOTYPE_METHOD(tpl, "isRunning", IsRunning);

	Local<Context> context = isolate->GetCurrentContext();
	exports->Set(context, String::NewFromUtf8(isolate, "Monitor").ToLocalChecked(), tpl->GetFunction(context).ToLocalChecked()).FromJust();
}

NODE_MODULE_INIT(/* exports, module, context */) {
	Monitor::Init(exports);
}
