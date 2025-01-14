---
sidebar_position: 6
---
# debug.h

### ファイル情報

- パス: `linux-v6.12/tools/lib/api/debug.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __API_DEBUG_H__
#define __API_DEBUG_H__

typedef int (*libapi_print_fn_t)(const char *, ...);

void libapi_set_print(libapi_print_fn_t warn,
		      libapi_print_fn_t info,
		      libapi_print_fn_t debug);

#endif /* __API_DEBUG_H__ */

```
