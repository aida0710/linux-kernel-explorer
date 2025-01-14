---
sidebar_position: 11
---
# chsc_sch.h

### ファイル情報

- パス: `linux-v6.12/drivers/s390/cio/chsc_sch.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _CHSC_SCH_H
#define _CHSC_SCH_H

struct chsc_request {
	struct completion completion;
	struct irb irb;
};

struct chsc_private {
	struct chsc_request *request;
};

#endif

```
