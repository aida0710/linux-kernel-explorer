---
sidebar_position: 26
---
# pxa2xx_base.h

### ファイル情報

- パス: `linux-v6.12/drivers/pcmcia/pxa2xx_base.h`

### コンテンツ

```h
int pxa2xx_drv_pcmcia_add_one(struct soc_pcmcia_socket *skt);
void pxa2xx_drv_pcmcia_ops(struct pcmcia_low_level *ops);
void pxa2xx_configure_sockets(struct device *dev, struct pcmcia_low_level *ops);


```
