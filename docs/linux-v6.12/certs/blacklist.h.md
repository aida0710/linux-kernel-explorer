---
sidebar_position: 3
---
# blacklist.h

### ファイル情報

- パス: `linux-v6.12/certs/blacklist.h`

### コンテンツ

```h
#include <linux/kernel.h>
#include <linux/errno.h>
#include <crypto/pkcs7.h>

extern const char __initconst *const blacklist_hashes[];

```
