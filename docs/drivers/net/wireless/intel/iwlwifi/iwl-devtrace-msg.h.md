---
sidebar_position: 13
---
# iwl-devtrace-msg.h

### ファイル情報

- パス: `drivers/net/wireless/intel/iwlwifi/iwl-devtrace-msg.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/******************************************************************************
 *
 * Copyright(c) 2009 - 2014 Intel Corporation. All rights reserved.
 *****************************************************************************/

#if !defined(__IWLWIFI_DEVICE_TRACE_MSG) || defined(TRACE_HEADER_MULTI_READ)
#define __IWLWIFI_DEVICE_TRACE_MSG

#include <linux/tracepoint.h>

#undef TRACE_SYSTEM
#define TRACE_SYSTEM iwlwifi_msg

#define MAX_MSG_LEN	110

DECLARE_EVENT_CLASS(iwlwifi_msg_event,
	TP_PROTO(struct va_format *vaf),
	TP_ARGS(vaf),
	TP_STRUCT__entry(
		__vstring(msg, vaf->fmt, vaf->va)
	),
	TP_fast_assign(
		__assign_vstr(msg, vaf->fmt, vaf->va);
	),
	TP_printk("%s", __get_str(msg))
);

DEFINE_EVENT(iwlwifi_msg_event, iwlwifi_err,
	TP_PROTO(struct va_format *vaf),
	TP_ARGS(vaf)
);

DEFINE_EVENT(iwlwifi_msg_event, iwlwifi_warn,
	TP_PROTO(struct va_format *vaf),
	TP_ARGS(vaf)
);

DEFINE_EVENT(iwlwifi_msg_event, iwlwifi_info,
	TP_PROTO(struct va_format *vaf),
	TP_ARGS(vaf)
);

DEFINE_EVENT(iwlwifi_msg_event, iwlwifi_crit,
	TP_PROTO(struct va_format *vaf),
	TP_ARGS(vaf)
);

TRACE_EVENT(iwlwifi_dbg,
	TP_PROTO(u32 level, const char *function,
		 struct va_format *vaf),
	TP_ARGS(level, function, vaf),
	TP_STRUCT__entry(
		__field(u32, level)
		__string(function, function)
		__vstring(msg, vaf->fmt, vaf->va)
	),
	TP_fast_assign(
		__entry->level = level;
		__assign_str(function);
		__assign_vstr(msg, vaf->fmt, vaf->va);
	),
	TP_printk("%s", __get_str(msg))
);
#endif /* __IWLWIFI_DEVICE_TRACE_MSG */

#undef TRACE_INCLUDE_PATH
#define TRACE_INCLUDE_PATH .
#undef TRACE_INCLUDE_FILE
#define TRACE_INCLUDE_FILE iwl-devtrace-msg
#include <trace/define_trace.h>

```
