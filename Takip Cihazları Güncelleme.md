
1. **APN ayarı (gerekirse)**  
    ```
    APN,internet#
    ```
2. **Sunucu Domain ve Port ayarı**      
    ```
    SERVER,1,tracker.arabam724.com,5013#
    ```
    
    > Not: `0` IP modu, `1` domain modu demek.
    
1. **GPRS aktif etmek için**
    ```
    GPRS,1#
    ```
2. **Kaydı kontrol (status)**  
    Ayarları gönderdikten sonra cihazdan:
    ```
    status#
    ```
    komutuyla dönüş alabilirsin. (örn: `server conn: ok, port: 5013` yazmalı)
    
---

```
1️⃣ APN ayarı (gerekiyorsa):
APN,internet#

2️⃣ Sunucu + port ayarı:
SERVER,0,159.253.39.131,5013#

3️⃣ GPRS aktif et:
GPRS,1#

4️⃣ Kontrol için:
status#
```

---


## Test

## 📡 **SMS Komut Şablonları**

### 🔹 Teltonika

```
setparam 2001:internet;2002:;2003:;2004:tracker.arabam724.com;2005:5027;2006:0
getver
```

---
### 🔹 TRV
```
APN,internet#
SERVER,1,tracker.arabam724.com,5010#
GPRS,1#
status#
```
---
### 🔹 Son Gelen Cihazlar (Protocol/GMNET türevleri)
```
protocol,2,2#
GMNET,tracker.arabam724.com,5023#
APN,internet#
status#
```
---

- **tracker.arabam724.com** → domain üzerinden bağlanıyor. 
- **5027 (Teltonika), 5010 (TRV), 5023 (GMNET)** → portlarını ayrı ayrı denemelisin.
- Her değişiklik sonrası **`status#`** ile doğrula.

---