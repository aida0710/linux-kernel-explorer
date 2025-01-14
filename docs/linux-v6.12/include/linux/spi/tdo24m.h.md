---
sidebar_position: 22
---
# tdo24m.h

### ファイル情報

- パス: `linux-v6.12/include/linux/spi/tdo24m.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __TDO24M_H__
#define __TDO24M_H__

enum tdo24m_model {
	TDO24M,
	TDO35S,
};

struct tdo24m_platform_data {
	enum tdo24m_model model;
};

#endif /* __TDO24M_H__ */

```
