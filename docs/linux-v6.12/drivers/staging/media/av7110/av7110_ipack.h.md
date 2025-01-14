---
sidebar_position: 10
---
# av7110_ipack.h

### ファイル情報

- パス: `linux-v6.12/drivers/staging/media/av7110/av7110_ipack.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _AV7110_IPACK_H_
#define _AV7110_IPACK_H_

int av7110_ipack_init(struct ipack *p, int size,
		      void (*func)(u8 *buf,  int size, void *priv));

void av7110_ipack_reset(struct ipack *p);
int  av7110_ipack_instant_repack(const u8 *buf, int count, struct ipack *p);
void av7110_ipack_free(struct ipack *p);
void av7110_ipack_flush(struct ipack *p);

#endif

```
