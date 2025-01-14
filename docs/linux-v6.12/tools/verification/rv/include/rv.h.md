---
sidebar_position: 2
---
# rv.h

### ファイル情報

- パス: `linux-v6.12/tools/verification/rv/include/rv.h`

### コンテンツ

```h
// SPDX-License-Identifier: GPL-2.0

#define MAX_DESCRIPTION 1024
#define MAX_DA_NAME_LEN	24

struct monitor {
	char name[MAX_DA_NAME_LEN];
	char desc[MAX_DESCRIPTION];
	int enabled;
};

int should_stop(void);

```
