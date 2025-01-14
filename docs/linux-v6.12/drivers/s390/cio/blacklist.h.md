---
sidebar_position: 3
---
# blacklist.h

### ファイル情報

- パス: `linux-v6.12/drivers/s390/cio/blacklist.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef S390_BLACKLIST_H
#define S390_BLACKLIST_H

extern int is_blacklisted (int ssid, int devno);

#endif

```
