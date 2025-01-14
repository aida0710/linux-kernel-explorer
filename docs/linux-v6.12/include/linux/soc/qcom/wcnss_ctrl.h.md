---
sidebar_position: 15
---
# wcnss_ctrl.h

### ファイル情報

- パス: `linux-v6.12/include/linux/soc/qcom/wcnss_ctrl.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __WCNSS_CTRL_H__
#define __WCNSS_CTRL_H__

#include <linux/rpmsg.h>

#if IS_ENABLED(CONFIG_QCOM_WCNSS_CTRL)

struct rpmsg_endpoint *qcom_wcnss_open_channel(void *wcnss, const char *name,
					       rpmsg_rx_cb_t cb, void *priv);

#else

static struct rpmsg_endpoint *qcom_wcnss_open_channel(void *wcnss,
						      const char *name,
						      rpmsg_rx_cb_t cb,
						      void *priv)
{
	WARN_ON(1);
	return ERR_PTR(-ENXIO);
}

#endif

#endif

```
