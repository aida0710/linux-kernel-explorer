---
sidebar_position: 54
---
# nls_ucs2_data.h

### ファイル情報

- パス: `linux-v6.12/fs/nls/nls_ucs2_data.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-or-later */

#ifndef _NLS_UCS2_DATA_H
#define _NLS_UCS2_DATA_H

struct UniCaseRange {
	wchar_t start;
	wchar_t end;
	signed char *table;
};

extern signed char NlsUniUpperTable[512];
extern const struct UniCaseRange NlsUniUpperRange[];

#endif /* _NLS_UCS2_DATA_H */

```
