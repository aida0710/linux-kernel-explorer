---
sidebar_position: 5
---
# mtk-adsp-common.h

### ファイル情報

- パス: `linux-v6.12/sound/soc/sof/mediatek/mtk-adsp-common.h`

### コンテンツ

```h
/* SPDX-License-Identifier: (GPL-2.0-only OR BSD-3-Clause) */

#ifndef __MEDIATEK_ADSP_COMMON_H__
#define __MEDIATEK_ADSP_COMMON_H__

#define EXCEPT_MAX_HDR_SIZE	0x400
#define MTK_ADSP_STACK_DUMP_SIZE 32

void mtk_adsp_dump(struct snd_sof_dev *sdev, u32 flags);
#endif

```
