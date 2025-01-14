---
sidebar_position: 4
---
# blacklist_hashes.c

### ファイル情報

- パス: `linux-v6.12/certs/blacklist_hashes.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include "blacklist.h"

const char __initconst *const blacklist_hashes[] = {
#include "blacklist_hash_list"
};

```
