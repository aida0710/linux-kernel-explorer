---
sidebar_position: 2
---
# add_negative

### ファイル情報

- パス: `linux-v6.12/scripts/atomic/fallbacks/add_negative`

### コンテンツ

```txt
cat <<EOF
	return raw_${atomic}_add_return${order}(i, v) < 0;
EOF

```
