# import alpine from docker official registry
FROM alpine:3.10
# expose port 51 TCP and 51 UDP for the DNS
EXPOSE 51 51/udp
# update and install unbound DNS
RUN apk update && apk add unbound --no-cache
# copy unbound local configuration file
COPY ./unbound.conf /etc/unbound/unbound.conf
# launch unbound with his configuration file
ENTRYPOINT [ "unbound" ]
CMD [ "-c", "/etc/unbound/unbound.conf"]
